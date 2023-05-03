import React from 'react';
import './Colors.css';
import { Link } from "react-router-dom";

const Colors =({colors}) => {
  return(
    <div className='Colors'>
        <div>
            <h3>Welcome to the color factory</h3>
            <h1><Link to="/colors/new">Add a Color</Link></h1>
        </div>
        <ul>
        {colors.map(color =>(
            <li key={color.id}><Link to={`/colors/${color.colorName}`}>{color.colorName}</Link></li>
        ))}
        </ul>
    </div>
  ) 
}

export default Colors;
