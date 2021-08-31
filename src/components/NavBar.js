import React from 'react';
import { NavLink } from 'react-router-dom';


const NavBar = () => {
    return (
        <div>
            <ul>
                <li><NavLink to='/home'>Home</NavLink></li>
                <li><NavLink to='/recipes'>Recipes</NavLink></li>
                <li><NavLink to='/user/recipes'>My Recipes</NavLink></li>
                <li><NavLink to='/recipes/new'>New Recipe</NavLink></li>
                <li><NavLink to='/login'>Login</NavLink></li>
            </ul>
            
        </div>
    )
}

export default NavBar
