import React from 'react';
import { NavLink } from 'react-router-dom';


const NavBar = ({loggedIn}) => {
    return (
        <div>
            <ul>
                <li><NavLink to='/home'>Home</NavLink></li>
                <li><NavLink to='/recipes'>Recipes</NavLink></li>
                <li>{loggedIn ? <NavLink to={`/users/${loggedIn.username}/recipes`}>My Recipes</NavLink> : <NavLink to='/users/new'>Sign Up</NavLink>}</li>
                <li><NavLink to='/login'>Login</NavLink></li>
                <p>{loggedIn ? <NavLink to={'/recipes/new'}>New Recipe</NavLink> : ""}</p>
            </ul>
            
        </div>
    )
}

export default NavBar
