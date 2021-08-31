import { pipelinePrimaryTopicReference } from '@babel/types'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const RecipeList = ({recipes}) => {

    const recipeArray = recipes.map(recipe => 
    <li key={recipe.id}>
        <p>{recipe.name}</p>
    </li>)
    console.log(recipeArray)
    return (
        <div>
            {recipeArray}
        </div>
    )
}

export default RecipeList
