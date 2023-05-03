import React from "react";
import DogDetals from "./DogDetals";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import './DogList.css'


const DogList = ({dogs}) => {
    console.log(dogs)
    return (
        <div className="DogList">
            <h1>Dog Lists</h1>
        {dogs.map(dog => {
            return (
                <ul> 
                <li className="DogList-name"><Link to={`/dogs/${dog.name}`}>{dog.name}</Link></li>
                <li><img src={`/pics/${dog.name.toLowerCase()}.jpg`} alt={dog.name}/></li>
                </ul>
            )
        })}
        </div>
    ) 
}


export default DogList;