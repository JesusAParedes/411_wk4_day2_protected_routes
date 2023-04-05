import React from 'react'
import { Routes, Route, Navigate } from 'react-router'
import cookie from 'cookie'
import Home from './components/Home'
import About from './components/About'
import Car from './components/Car'
import Login from './components/Login'

// Write checkAuth function here
// Check the cookies for a cookie called "loggedIn"
const checkAuth = () => {
    
    const cookies = cookie.parse(document.cookie);
    
    return cookies['loggedIn'] ? true : false;
};

// Write ProtectedRoute function here
const ProtectedRoute = (props) => {
    const { component: Component, ...rest } = props;

    return (
        checkAuth() === true ? 
        ( <Component { ...rest } /> ) : ( <Navigate to="/411_wk4_day2_protected_routes/login"/>)
        
    )
}

const Router = () => {
    return (
        <Routes>
            <Route path="/411_wk4_day2_protected_routes" element={<ProtectedRoute component={ Home }/>} />
            <Route path="/411_wk4_day2_protected_routes/login" element={<Login/>} />
            <Route path="/411_wk4_day2_protected_routes/about" element={<ProtectedRoute component={ About }/>} />
            <Route path="/411_wk4_day2_protected_routes/car/:id" element={<ProtectedRoute component={ Car }/>} />
        </Routes>
    );
};

export default Router;