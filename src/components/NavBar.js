import React from 'react';
import { NavLink } from 'react-router-dom';


const NavBar = ({loggedIn, userLogOut}) => {
    return (
        <div>
            <ul>
                <p><NavLink to='/home'>Home</NavLink></p>
                <p>{loggedIn ? "" : <NavLink to='/recipes'>Recipes</NavLink>}</p>
                <p>{loggedIn ? <NavLink to={`/users/${loggedIn.username}/recipes`}>My Recipes</NavLink> : <NavLink to='/users/new'>Sign Up</NavLink>}</p>
                <p>{loggedIn ? <NavLink to={'/home'} onClick={userLogOut} >Sign Out</NavLink> : <NavLink to='/login'>Login</NavLink> }</p>
                <p>{loggedIn ? <NavLink to={'/recipes/new'}>New Recipe</NavLink> : ""}</p>
            </ul>
            
        </div>
    )
}

export default NavBar
