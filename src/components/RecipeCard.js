import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const RecipeCard = () => {
    const [recipe, setRecipe] = useState(null)
    const params = useParams()

    useEffect(() => {
        fetch("http://localhost:9393/recipes/" + params.id)
        .then(resp => resp.json())
        .then(recipe => setRecipe(recipe))
    }, [])

    return (
        <div>
            <h3>{recipe.name}</h3>
            <p>{recipe.ingredients}</p>
            <p>{recipe.description}</p>
            <p>{recipe.user}</p>
        </div>
    )
}

export default RecipeCard
