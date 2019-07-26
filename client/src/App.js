import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Parent from "./pages/Parent";
import ChoreList from "./pages/ChoreList";
import RewardList from "./pages/RewardList";
import NoMatch from "./pages/NoMatch";
//import LogForm from "./components/LogForm";
//import Header from "./components/Header";
//import Wallpaper from "./components/Wallpaper";
import './App.css';



class App extends React.Component {
  render() {
    return (
      <Router>

        <div>
         
          <Switch>
            <Route exact path="/" component={Login}/>          
            <Route exact path="/parent" component={Parent} />         
            <Route exact path="/parent/chores" component={ChoreList} />
            <Route exact path="/parent/chores/:id" component={ChoreList} />
            <Route exact path="/parent/rewards" component={RewardList} />
            <Route exact path="/parent/rewards/level/:level" component={RewardList} />       
            <Route component={NoMatch} />
         
          </Switch>
        
        </div>
      </Router>
    );
  }
}

export default App;
