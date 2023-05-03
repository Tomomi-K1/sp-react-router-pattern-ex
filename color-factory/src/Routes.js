import React ,{ useState } from "react";
import { v4 as uuid } from 'uuid'; 
import { Route, Switch, Redirect } from "react-router-dom";

import NewColorForm from "./NewColorForm";
import ColorPage from "./ColorPage";
import Colors from "./Colors";


const Routes = () => {
    const initialState = [
        {id: uuid(), colorName: "red", colorHex:"#FF0000"},
        {id: uuid(), colorName: "blue", colorHex:"#0000FF"}
    ]
    const [colors, setColors] = useState(initialState);

    const addColor = (newColor) => {
        setColors( colors=> [
            {...newColor, id:uuid()}, ...colors
        ]) 
    }

    return (
        <Switch>
            <Route path="/colors/new"><NewColorForm addColor={addColor} /></Route>
            <Route path="/colors/:color"><ColorPage colors={colors} /></Route>
            <Route path="/colors"><Colors colors={colors} /></Route>
            <Redirect to="/colors" />
        </Switch>
    )
}

export default Routes;