import React, { Component } from 'react';
//import { withRouter } from 'react-router-dom';
import auth0Client from './Auth';

class Callback extends Component {
  componentDidMount() {
    console.log('here in call back');
    auth0Client.handleAuthentication().then(function(){
      this.props.history.replace('/role');
    });
  }

  render() {
    return (
      <p>Loading profile...</p>
    );
  }
}

export default Callback;
