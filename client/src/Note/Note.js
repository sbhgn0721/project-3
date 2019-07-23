import React, {Component} from 'react';
import axios from 'axios';
import SubmitComment from './SubmitComment';
import auth0Client from '../Auth';

class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note: null,
    };

    this.submitComment = this.submitComment.bind(this);
  }

  async componentDidMount() {
    await this.refreshNote();
  }

  async refreshNote() {
    const { match: { params } } = this.props;
    const note = (await axios.get(`http://localhost:8081/${params.noteId}`)).data;
    this.setState({
      note,
    });
  }

  async submitComment(comment) {
    await axios.post(`http://localhost:8081/comment/${this.state.note.id}`, {
      comment,
    }, {
      headers: { 'Authorization': `Bearer ${auth0Client.getIdToken()}` }
    });
    await this.refreshNote();
  }

  render() {
    const {note} = this.state;
    if (note === null) return <p>Loading ...</p>;
    return (
      <div className="container">
        <div className="row">
          <div className="jumbotron col-12">
            <h1 className="display-3">{note.title}</h1>
            <p className="lead">{note.description}</p>
            <hr className="my-4" />
            <SubmitComment noteId={note.id} submitComment={this.submitComment} />
            <p>Answers:</p>
            {
              note.comments.map((comment, idx) => (
                <p className="lead" key={idx}>{comment.comment}</p>
              ))
            }
          </div>
        </div>
      </div>
    )
  }
}

export default Note;
