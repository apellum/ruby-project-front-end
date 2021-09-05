import React from 'react'

const RecipeCard = ({recipe, deleteRecipe, loggedIn}) => {
    

    return (
        <div>
            <h3>{recipe.name}</h3>
            <p>{recipe.ingredients}</p>
            <p>{recipe.description}</p>
            <p>{recipe.user}</p>
            <div>
                {loggedIn ? (<button onClick={deleteRecipe}>Delete Recipe</button>) : (null)}
            </div>
        </div>
    )
}

export default RecipeCard
