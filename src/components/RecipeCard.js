import React from 'react'

const RecipeCard = ({recipe, deleteRecipe}) => {


    return (
        <div>
            <h3>{recipe.name}</h3>
            <p>{recipe.ingredients}</p>
            <p>{recipe.description}</p>
            <p>{recipe.user}</p>
            <button onClick={deleteRecipe}>Delete Recipe</button>
        </div>
    )
}

export default RecipeCard
