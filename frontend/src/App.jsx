import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Signup from "./Components/Signup/Signup";
import Login from "./Components/Login/Login";
import Footer from "./Components/Footer/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';  
import PageNotFound from "./Components/404/PageNotFound";

const Routing = () => {
    return(
        <>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/signup" element={<Signup/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/oops" element={<PageNotFound/>} />
                <Route path="*" element={<Navigate to="/oops"/>}/>
            </Routes>
        </>
    )
}

const App = () => {
    const location = useLocation();
    return(
        <>
            { location.pathname === "/oops" ? null : <Header/> }
            <Routing/>
            { location.pathname === "/oops" ? null : <Footer/> }
        </>
    )
}

export default App;
