import React, { useEffect, useState } from 'react';
import "../App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from './Home';
import NavBar from './NavBar';
import RecipeList from './RecipeList';
import CreateUser from './CreateUser';
import CreateRecipe from './CreateRecipe';
import RecipeCard from './RecipeCard';
import Login from './Login';
import userEvent from '@testing-library/user-event';


function App() {
  // const [username, setUsername] = useState("")
  const [recipes, setRecipes] = useState([])

//   const [formInput, setFormInput] = useState({
//     name: "",
//     position: "",
//     bio: "",
//     likes: 0
// })

  useEffect(() => {
    fetch("http://localhost:9393/recipes")
    .then(resp => resp.json())
    .then(data => setRecipes(data))
  }, [])

  function updateRecipes (updatedRecipe) {
    const newRecipeList = recipes.map(recipe => {
      if (recipe.id === updatedRecipe.id) {
        return {...updatedRecipe}
      } else {
        return recipe
      }
    })
    setRecipes(newRecipeList)
  }

  return (
    <div>
      <Router>
        < NavBar/>
        <Switch>
          <Route exact path='/home'>
            < Home/>
          </Route>
          <Route exact path='/login'>
            < Login/>
          </Route>
          <Route exact path='/users/new'>
            < CreateUser/>
          </Route>
          <Route exact path='/recipes/new'>
            < CreateRecipe/>
          </Route>
          <Route exact path='/recipes'>
            < RecipeList  recipes={recipes}/>
          </Route>
          <Route exactpath='/recipes/:id'>
            <RecipeCard/>
          </Route>
        </Switch>
      </Router>
    </div>
    
  );
}

export default App;
