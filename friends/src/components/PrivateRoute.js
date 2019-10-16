import React from "react";
import { Route, Redirect } from "react-router-dom";

export default function PrivateRoute({ component: Component, ...rest }) {
    return (
        <Route 
            {...rest}
            render={props => {
                if (localStorage.getItem('token')) {
                    return <Component {...props} />
                } else {
                    // window.alert("Incorrect Login")
                    return <Redirect to="/login" /> //tried changing to "/" but button stopped working
                }
            }}
        />
    );
};

//Redirect
//component destructuring, changing cases
//can be called as a proper comp, spread in the rest as props with rest?
//...rest??
//