import React from 'react';
import {
    Router,
    Route,
    Switch
} from "react-router-dom";
import {history} from './store'
import './App.css';
import Result from "./pages/Result";
import Checkout from "./pages/Checkout";

const App = () => {
    return (
        <Router history={history}>
            <Switch>
                <Route
                    path="/"
                    exact
                    component={Result}
                />

                <Route
                    path="/checkout"
                    exact
                    component={Checkout}
                />
            </Switch>
        </Router>
    );
}

export default App;
