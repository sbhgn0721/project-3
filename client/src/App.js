import React, { Component } from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
import auth0Client from './utils/Auth';
import Callback from './utils/Callback';
import NavTabs from "./components/NavTabs/NavTabs";
import Welcome from "./pages/Welcome";
import Parent from "./pages/Parent";
import ChoreList from "./pages/ChoreList";
import RewardList from "./pages/RewardList";
import NoMatch from "./pages/NoMatch";
import Role from "./pages/Role";
//import LogForm from "./components/LogForm";
//import Header from "./components/Header";
//import Wallpaper from "./components/Wallpaper";
import SecuredRoute from './components/SecuredRoute/SecuredRoute';

import './App.css';

// made a change

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkingSession: true,
    }
  }

  async componentDidMount() {
    if (this.props.location.pathname === '/callback') {
      this.setState({ checkingSession: false });
      return;
    }
    try {
      await auth0Client.silentAuth();
      this.forceUpdate();
    } catch (err) {
      if (err.error !== 'login_required') console.log(err.error);
    }
    this.setState({ checkingSession: false });
  }

  render() {
    return (

        <div>
        <NavTabs />

          <Switch>
            <Route exact path="/" component={Welcome} />
            <SecuredRoute exact path="/role" component={Role} checkingSession={this.state.checkingSession}/>
            <SecuredRoute exact path="/parent" component={Parent} checkingSession={this.state.checkingSession}/>
            <SecuredRoute exact path="/parent/chores" component={ChoreList} checkingSession={this.state.checkingSession}/>
            <SecuredRoute exact path="/parent/chores/:id" component={ChoreList} checkingSession={this.state.checkingSession}/>
            <SecuredRoute exact path="/parent/rewards" component={RewardList} checkingSession={this.state.checkingSession}/>
            <SecuredRoute exact path="/parent/rewards/level/:level" component={RewardList} checkingSession={this.state.checkingSession}/>
            <Route exact path='/callback' component={Callback} />
            <Route component={NoMatch} />
          </Switch>

        </div>
    );
  }
}

export default withRouter(App);
