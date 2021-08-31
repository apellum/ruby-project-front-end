import React from 'react';
import { NavLink } from 'react-router-dom';


const NavBar = () => {
    return (
        <div>
            <ul>
                <li><NavLink to='/home'>Home</NavLink></li>
            </ul>
            
        </div>
    )
}

export default NavBar
