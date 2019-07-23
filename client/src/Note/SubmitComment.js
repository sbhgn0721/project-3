import React, {Component, Fragment} from 'react';
import {withRouter} from 'react-router-dom';
import auth0Client from '../Auth';

class SubmitComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: '',
    };
  }

  updateComment(value) {
    this.setState({
      comment: value,
    });
  }

  submit() {
    this.props.submitComment(this.state.comment);

    this.setState({
      comment: '',
    });
  }

  render() {
    if (!auth0Client.isAuthenticated()) return null;
    return (
      <Fragment>
        <div className="form-group text-center">
          <label htmlFor="exampleInputEmail1">Comment:</label>
          <input
            type="text"
            onChange={(e) => {this.updateComment(e.target.value)}}
            className="form-control"
            placeholder="Share your comment."
            value={this.state.comment}
          />
        </div>
        <button
          className="btn btn-primary"
          onClick={() => {this.submit()}}>
          Submit
        </button>
        <hr className="my-4" />
      </Fragment>
    )
  }
}

export default withRouter(SubmitComment);
