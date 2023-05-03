import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import DogList from "./DogList";
import DogDetails from "./DogDetals";

const Routes = ({dogs}) => {
    return (
        <Switch>
            <Route path="/dogs/:name"><DogDetails dogs={dogs} /></Route>
            <Route path="/dogs"><DogList dogs={dogs} /></Route>
            <Redirect to="/dogs" />
        </Switch>
    )
}

export default Routes;