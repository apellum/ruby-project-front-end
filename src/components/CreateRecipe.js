import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

const CreateRecipe = () => {
    const [formInput, setFormInput] = useState({
        name: "",
        ingredients: "",
        description: "",
        user: ""
    })

    function handleChange (event) {
        const key = event.target.name
        const value = event.target.value
        setFormInput({
            // Take everything in formInput and change the new player :key
            ...formInput,
           [key]: value 
        })
    }
// The useHistory hook gives you access to the history instance that you may use to navigate.
    const history = useHistory()
    

    function handleSubmit (event) {
        event.preventDefault()
        
        fetch("http://localhost:9393/recipes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(formInput)
        })
        .then(resp => resp.json())
        .then(data => {

            //take a look here
            history.push(`/recipes/${data.id}`)
        })

        

        setFormInput({
            name: "",
            ingredients: "",
            description: "",
            user: ""
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
