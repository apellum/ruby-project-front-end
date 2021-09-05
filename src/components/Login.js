import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

const Login = ({ loggedInUser }) => {
    const [username, setUsername] = useState("")
    const history = useHistory()

    const handleChange = (event) => {
        setUsername(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        findUser(username)
    }

    async function findUser(username) {
        const fetch_response = await fetch(`http://localhost:9393/users/${username}`)
        const user = await fetch_response.json()
        loggedInUser(user)
        history.push(`/users/${username}`)
    }



    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label value="user">User</label><br></br>
                <input type="text" name="userInput" value={username} onChange={handleChange}></input>
                <input type="submit" value="Log In"></input><br></br>
            </form>
        </div>
    )
}

export default Login
