import React from 'react';
import "../App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from './Home'
import NavBar from './NavBar';


function App() {

  return (
    <div>
      <Router>
        < NavBar/>
        <Switch>

          <Route exact path='/home'>
            < Home/>
          </Route>
        </Switch>
      </Router>
    </div>
    
  );
}

export default App;
