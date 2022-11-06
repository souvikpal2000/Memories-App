import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Cookies from 'js-cookie';
import Home from "./Home/Home"
import Signup from "./Signup/Signup";
import Login from "./Login/Login";
import Posts from "./Posts/Posts";
import Profile from "./Profile/Profile";
import Logout from "./Logout";
import PageNotFound from "./404/PageNotFound";
import { UserContext } from "../App";
import { useEffect } from "react";

const Render = ({state}) => {
    if(!state){ //LoggedOut
        return(
            <>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/signup" element={<Signup/>} />
                    <Route path="/login" element={<Login/>} />
                    <Route path="*" element={<Navigate to="/oops"/>}/>
                    <Route path="/oops" element={<PageNotFound/>} />
                </Routes>
            </>
        )
    }
    return(
        <>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/posts" element={<Posts/>} />
                <Route path="/profile" element={<Profile/>} />
                <Route path="/logout" element={<Logout/>} />
                <Route path="*" element={<Navigate to="/oops"/>}/>
                <Route path="/oops" element={<PageNotFound/>} />
            </Routes>
        </>
    )
}

const Routing = () => {
    const {state, dispatch} = useContext(UserContext);

    useEffect(() => {
        if(Cookies.get("jwt")){
            return dispatch({type: "loggedIn"});
        }
        dispatch({type: "loggedOut"});
    }, []);

    return(
        <>
            <Render state={state}/>
        </>

    );
}

export default Routing;