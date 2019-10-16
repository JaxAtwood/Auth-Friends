import React from 'react';
import Login from "./components/Login";
import { BrowserRouter as Router, Route } from "react-router-dom"; 
import PrivateRoute from "./components/PrivateRoute";
import FriendList from "./components/FriendList";
import "./App.css"


function App() {
  return (
    <div className="App">
      <Router>
        <div className="header">
        <h1>Friends-List Project</h1>
        </div>
        <Route path="/login" component={Login} /> 
        <PrivateRoute exact path="/" component={FriendList} /> 
      </Router>
    </div>
  );
}

export default App;

//wrapped in Router after importing BrowserRouter as Router and Route
//add Routes to Login.... 
//route to home??? Calls it friendlist?
//wraps route for login, FL, and FF in Router tag/alias???
//creates component folder
//Login.js, FreidnForm.js, and FriendList.js
//localhost:3000 goes home?
//localhost:3000/login goes?
//localhost:3000/
//localhost:3000/
//on refrresh goes to localhost:3000/protected