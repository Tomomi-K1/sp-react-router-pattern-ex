import React, { useState }from "react";
import './NewColorForm.css';
import { useHistory } from "react-router-dom";

const NewColorForm = ({addColor}) => {
    const initialState ={
        colorName:"",
        colorHex:""
    }
    const [colorData, setColorData] = useState(initialState);

    const history = useHistory();

    const handleChange = (e) => {
        const {name, value} = e.target;
        setColorData(colorData =>(
          {...colorData, 
            [name] : value}  
        ))
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        addColor(colorData);
        setColorData(initialState);
        history.push('/colors')
        
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="NewColorForm">
                <label htmlFor="colorName">Color Name</label>
                <input type="text" name="colorName" id="colorName" value={colorData.colorName} onChange={handleChange} />
                <label htmlFor="colorHex">Color</label>
                <input type="color" name="colorHex" id="colorHex" value={colorData.colorHex} onChange={handleChange} />  
                <button>Add a Color</button>
            </div>
        </form>
    )
}

export default NewColorForm;