import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Parent from "./pages/Parent";
import ChoreList from "./pages/ChoreList";
import RewardList from "./pages/RewardList";
import NoMatch from "./pages/NoMatch";
import NavTabs from "./components/NavTabs/NavTabs";

class App extends React.Component {
  render() {
    return (
      <Router>

        <div>
          <NavTabs />
         
          <Switch>
           
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
