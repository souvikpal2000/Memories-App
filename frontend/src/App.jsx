import React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";
import 'bootstrap/dist/css/bootstrap.min.css';  

const Routing = () => {
    return(
        <>
            <Routes>
                <Route path="/" element={<Home/>} />
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
