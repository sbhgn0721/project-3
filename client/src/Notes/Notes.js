import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Notes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: null,
    };
  }

  async componentDidMount() {
    const notes = (await axios.get('http://localhost:8081/')).data;
    this.setState({
      notes,
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <Link to="/new-note">
            <div className="card text-white bg-secondary mb-3">
              <div className="card-header">Need help? Ask here!</div>
              <div className="card-body">
                <h4 className="card-title">+ New Note</h4>
                <p className="card-text">Don't worry. Help is on the way!</p>
              </div>
            </div>
          </Link>
          {this.state.notes === null && <p>Loading notes...</p>}
          {
            this.state.notes && this.state.notes.map(note => (
              <div key={note.id} className="col-sm-12 col-md-4 col-lg-3">
                <Link to={`/note/${note.id}`}>
                  <div className="card text-white bg-success mb-3">
                    <div className="card-header">Responses: {note.comments}</div>
                    <div className="card-body">
                      <h4 className="card-title">{note.title}</h4>
                      <p className="card-text">{note.description}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))
          }
        </div>
      </div>
    )
  }
}

export default Notes;
