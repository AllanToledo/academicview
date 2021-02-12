import React from 'react';
import { Route } from "react-router-dom";
import { Routes } from "react-router";
import Login from "../app/login";
import Home from '../app/home';


function AppRoutes() {
    return (
        <Routes>
            <Route path="/home">
                <Home />
            </Route>
            <Route>
                <Login />
            </Route>
        </Routes>
    );
}

export default AppRoutes;