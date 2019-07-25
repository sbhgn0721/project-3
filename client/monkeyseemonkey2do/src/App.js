import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Saved from "./pages/Saved";
import HomePage from "./pages/HomePage";
import NoMatch from "./pages/NoMatch";
import NavTabs from "./components/NavTabs/NavTabs";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import Footer from "./components/Footer/Footer"

class App extends React.Component {
  render() {
    return (
      <Router>

        <div>
          <NavTabs />
          <Jumbotron />

          <Switch>
            <Route exact path="/" component={HomePage} />
           
            <Route exact path="/saved" component={Saved} />
            <Route exact path="/saved/:id" component={Saved} />
       
            <Route component={NoMatch} />
         
          </Switch>
          
          <Footer />

        </div>
      </Router>
    );
  }
}

export default App;
