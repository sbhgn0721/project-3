import React, { Component } from 'react';
//import { withRouter } from 'react-router-dom';
//import auth0Client from './Auth';

class Callback extends Component {
  // async componentDidMount() {
  //   console.log('here in call back');
  //   await auth0Client.handleAuthentication();
  //   this.props.history.replace('/role');
  // }

  render() {
    return (
      <p>Loading profile...</p>
    );
  }
}

export default Callback;
