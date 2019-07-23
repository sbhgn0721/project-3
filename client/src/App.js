import React, { Component } from 'react';
import {Route, withRouter} from 'react-router-dom';
import auth0Client from './Auth';
import NavBar from './NavBar/NavBar';
import Note from './Note/Note';
import Notes from './Notes/Notes';
import Callback from './Callback';
import NewNote from './NewNote/NewNote';
import SecuredRoute from './SecuredRoute/SecuredRoute';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkingSession: true,
    }
  }

  async componentDidMount() {
    if (this.props.location.pathname === '/callback') {
      this.setState({checkingSession:false});
      return;
    }
    try {
      await auth0Client.silentAuth();
      this.forceUpdate();
    } catch (err) {
      if (err.error !== 'login_required') console.log(err.error);
    }
    this.setState({checkingSession:false});
  }

  render() {
    return (
      <div>
        <NavBar/>
        <Route exact path='/' component={Notes}/>
        <Route exact path='/note/:noteId' component={Note}/>
        <Route exact path='/callback' component={Callback}/>
        <SecuredRoute path='/new-note'
                      component={NewNote}
                      checkingSession={this.state.checkingSession} />
      </div>
    );
  }
}

export default withRouter(App);
