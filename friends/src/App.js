import React from 'react';
import Login from "./components/Login";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import FriendsList from "./components/FriendsList";


function App() {
  return (
    <Router>
      <div className="App">
        <h1>Auth Friends Project</h1>
        <Link to="/protected">Protected Page</Link>
        <Link to="/login">Login</Link>
        <Switch>
          <PrivateRoute path="/protected" component={FriendsList} />
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
