import React, { useEffect, useState } from 'react';
import "../App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from './Home';
import NavBar from './NavBar';
import RecipeList from './RecipeList';
import CreateUser from './CreateUser';
import CreateRecipe from './CreateRecipe';
import MyRecipes from './MyRecipes'
import Login from './Login';


function App() {
  const [loggedIn, setLoggedIn] = useState(null)
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('http://localhost:9393/users')
    .then(resp => resp.json())
    .then(data => setUsers(data))
  }, [])

  const updateUsers = (createdUser) => {
    setUsers([...users, createdUser])
  }

  const loggedInUser = (user) => {
    setLoggedIn(user)
  }

  const userLogOut = () => {
    setLoggedIn(null)
  }

  return (
    <div>
      {loggedIn ? <div>Welcome to Recipe Book {loggedIn.username}</div> : ""}
      <Router>
        < NavBar loggedIn={loggedIn} userLogOut={userLogOut}/>
        <Switch>
          <Route exact path='/home'>
            < Home/>
          </Route>
          <Route exact path='/login'>
            < Login loggedInUser={loggedInUser}/>
          </Route>
          <Route exact path='/users/new'>
            < CreateUser updateUsers={updateUsers} loggedInUser={loggedInUser} />
          </Route>
          <Route exact path='/recipes/new'>
            < CreateRecipe loggedIn={loggedIn}/>
          </Route>
          <Route exact path='/users/:username/recipes'>
            < MyRecipes loggedIn={loggedIn}/>
          </Route>
          <Route exact path='/recipes'>
            < RecipeList loggedIn={loggedIn}/>
          </Route>
        </Switch>
      </Router>
    </div>
    
  );
}

export default App;
