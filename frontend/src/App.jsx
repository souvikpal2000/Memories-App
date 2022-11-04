import React, { useReducer, createContext, useContext } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Signup from "./Components/Signup/Signup";
import Login from "./Components/Login/Login";
import Footer from "./Components/Footer/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';  
import PageNotFound from "./Components/404/PageNotFound";
import Logout from "./Components/Logout";

export const UserContext = createContext();
const initialState = null;
const reducer = (state, action) => {
    switch(action.type){
        case 'loggedIn':
            state = true;
            break;
        case 'loggedOut':
            state = false;
            break;
    }
    return state;
}

const Routing = () => {
    const {state} = useContext(UserContext);
    if(state){ // LoggedIn Routers
        return(
            <>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/logout" element={<Logout/>} />
                    <Route path="/oops" element={<PageNotFound/>} />
                    <Route path="*" element={<Navigate to="/oops"/>}/>
                </Routes>
            </>
        )
    }
    else{ // LoggedOut Routers
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
}

const App = () => {
    const location = useLocation();
    const [state, dispatch] = useReducer(reducer, initialState);
    return(
        <>  
            <UserContext.Provider value={{state, dispatch}}>
                { location.pathname === "/oops" ? null : <Header/> }
                <Routing/>
                { location.pathname === "/oops" ? null : <Footer/> }
            </UserContext.Provider>
        </>
    )
}

export default App;