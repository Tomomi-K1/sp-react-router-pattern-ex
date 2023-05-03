import React from "react";
import './Nav.css';
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

const Nav = ({dogs}) => {
    return (
        <nav className="Nav">
         <NavLink to="/dogs">Dog List</NavLink>
         {dogs.map(dog=>(<NavLink to={`/dogs/${dog.name}`}>{dog.name}</NavLink>))}
        </nav>
    )
}

export default Nav;