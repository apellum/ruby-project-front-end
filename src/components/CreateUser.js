import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

const CreateUser = ({ updateUsers, loggedInUser}) => {
    const [newUserForm, setNewUserForm] = useState({
        username: ""
    })
    // const history = useHistory()

const handleChange = (event) => {
    const value = event.target.value
    const key = event.target.name
    setNewUserForm({...newUserForm, [key]:value})
}

const handleSubmit = (event) => {
    event.preventDefault()

    fetch('http://localhost:9393/users',{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newUserForm)
    })
    .then(resp => resp.json())
    .then(data => {
        updateUsers(data)
        // history.push(`/users/${data.id}`)
        loggedInUser(data)
        setNewUserForm(data)
    })

    setNewUserForm({
        username: ""
    })

}

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h3>Create New User</h3>
                <input type="text" name="username" placeholder="username" value={newUserForm.username} onChange={handleChange}></input>
                <input type="submit" value="Add User"></input>
            </form>
        </div>
    )
}

export default CreateUser
