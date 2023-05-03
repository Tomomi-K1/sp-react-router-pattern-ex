import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { useParams, Redirect } from "react-router-dom";
import './DogDetails.css'

const DogDetals = ({dogs}) => {
    const {name} = useParams();
  
    const dog = dogs.filter(dog=> dog.name === name);
    if (dog.length===0) return < Redirect to="/dogs"/>
    console.log(dog)
    return (
        <div className="DogDetails">
            <h3 className="DogDetails-name">{dog[0].name}</h3>
            <img className="DogDetails-img" src={`/pics/${dog[0].src.toLowerCase()}.jpg`} alt={dog[0].name}/>
            <div className="DogDetails-list">
                <ul>
                <li>Age:{dog[0].age}</li>
                <li>Facts:
                    <ul>
                        {dog[0].facts.map(fact => <li>{fact}</li>)}
                    </ul>
                </li>
            </ul>
            </div>
        </div>
    ) 
}

export default DogDetals;