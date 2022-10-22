import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Signup from "./Components/Signup/Signup";
import Footer from "./Components/Footer/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';  

const Routing = () => {
    return(
        <>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/signup" element={<Signup/>} />
            </Routes>
        </>
    )
}

const App = () => {
    return(
        <>
            <Header/>
            <Routing/>
            <Footer/>
        </>
    )
}

export default App;
