import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import auth0Client from './Auth';

class Callback extends Component {
  componentDidMount = () => {
    const scope = this;
    console.log('here in call back');
    auth0Client.handleAuthentication().then(function(){
     console.log('inside handle call back');

      scope.props.history.replace('/role');
    }).catch(function(err){
      console.log("Callback.js err", err);
    });
  }

  render() {
    return (
      <p>Loading profile...</p>
    );
  }
}

export default Callback;
