import React from 'react';
import { NavLink } from 'react-router-dom';


const NavBar = ({loggedIn, userLogOut}) => {
    return (
        <div>
            <nav className="navbar">
                <NavLink to='/home'>Home</NavLink>
                {loggedIn ? "" : <NavLink className="recipes-link" to='/recipes'>Recipes</NavLink>}
                {loggedIn ? <NavLink className="signup-link" to={`/users/${loggedIn.username}/recipes`}>My Recipes</NavLink> : <NavLink className="signup-link" to='/users/new'>Sign Up</NavLink>}
                {loggedIn ? <NavLink to={'/home'} onClick={userLogOut} >Sign Out</NavLink> : <NavLink to='/login'>Login</NavLink> }
                {loggedIn ? <NavLink className="newrecipes-link"to={'/recipes/new'}>New Recipe</NavLink> : ""}
            </nav>
            
        </div>
    )
}

export default NavBar
