import React from 'react';

import Login from './components/login/login.js'
import {  BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignUp from './components/SignUp/SignUp.js'
import Navbar from './components/Navbar/Navbar'
const App = () => {


  return (
    <Router>
    
     <Navbar/>
      <Switch>
     <Route exact path = "/"> 
    <Login state = {{error_email : null}}/>
    </Route>
    <Route exact path = "/signup">
    <SignUp/>
    </Route>
    </Switch>
    </Router>

  );
};

export default App;
