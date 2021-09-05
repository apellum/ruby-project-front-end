import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useHistory } from 'react-router-dom'

const CreateRecipe = ({ loggedIn }) => {
    const [formInput, setFormInput] = useState({
        name: "",
        ingredients: "",
        description: "",
        user_id: loggedIn.id
    })

    const history = useHistory()


    function handleChange (event) {
        const key = event.target.name
        const value = event.target.value
        setFormInput({
            // Take everything in formInput and change the new player :key
            ...formInput,
           [key]: value 
        })
    }
    

    function handleSubmit (event) {
        event.preventDefault()
        fetch('http://localhost:9393/recipes', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formInput)
        })
        .then(resp => resp.json())
        .then(data => {
        })
        history.push(`/users/${loggedIn.username}/recipes`)

        

        setFormInput({
            name: "",
            ingredients: "",
            description: "",
        })

    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input name="name" value={formInput.name} type="text" placeholder="recipe name" onChange={handleChange}></input>
                <input name="ingredients" value={formInput.ingredients} type="text" placeholder="ingredients" onChange={handleChange}></input>
                <input name="description" value={formInput.description} type="text" placeholder="description" onChange={handleChange}></input>
                <input id="add-recipe-submit" type="submit" value="Add Recipe"></input>
            </form>
        </div>
    )
}

export default CreateRecipe
