import React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

import Login from './pages/Login'
import SignUp from './pages/SignUp'
import './App.css';

function App() {
    return(
    <Router>
        <div>
            <Switch>
                <Route path="/" exact>
                    <Login/>
                </Route>
                <Route path="/signup" exact>
                    <SignUp />
                </Route>
            </Switch>
        </div>

    </Router>
    )}
export default App;
