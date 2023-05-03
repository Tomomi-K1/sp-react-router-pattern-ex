import React from "react";
import './ColorPage.css'
import { useParams, Redirect, Link } from "react-router-dom";

const ColorPage = ({colors}) => {
    const {color} = useParams();
    const matchedColor = colors.filter(c=>c.colorName.toLowerCase() === color)
    if(matchedColor.length ===0) return <Redirect to="/colors" />
    const {colorName, colorHex} = matchedColor[0];
    return (
        <div className="ColorPage" style={{backgroundColor:`${colorHex}`}}>
            <h1>This is {colorName.toUpperCase()}</h1>
            <Link to="/colors">Go back to Color Lists</Link>
        </div>
    )
}

export default ColorPage;