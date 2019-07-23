import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import auth0Client from './Auth';
import Home from './Pages/Home';
import About from './Pages/About';
import Welcome from './Pages/Welcome';
import Callback from './Callback';
import SecuredRoute from './SecuredRoute';
import logo from './logo.svg';
import './App.css';


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
        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path='/callback' component={Callback} />
              <SecuredRoute path='/welcome' component={Welcome}
                checkingSession={this.state.checkingSession} />
            </Switch>
          </div>
        </Router>
        <div>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
      </div>
    );
  }
}

export default App;
