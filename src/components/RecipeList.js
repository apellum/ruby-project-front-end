import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import RecipeCard from './RecipeCard'


const RecipeList = ({loggedIn}) => {
    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        fetch('http://localhost:9393/recipes')
        .then(resp => resp.json())
        .then(data => setRecipes(data))
    }, [])

    const recipeArray = recipes.map((recipe, index) => < RecipeCard key={index} recipe={recipe} loggedIn={loggedIn}/>)

    return (
        <div>
            {recipeArray}
        </div>
    )
}

export default RecipeList
