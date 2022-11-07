import React, { useReducer, createContext } from "react";
import Header from "./Components/Header/Header";
import Routing from "./Components/Routing";
import Footer from "./Components/Footer/Footer";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { useState } from "react";

export const UserContext = createContext();
const initialState = null;
const reducer = (state, action) => {
	switch (action.type){
		case 'loggedIn':
			return true;
		case 'loggedOut':
			return false;
		default:
      		throw new Error();
	}
} 

const App = () => {
	const [state, dispatch] = useReducer(reducer, initialState);
	return(
		<>	
			<UserContext.Provider value={{state, dispatch}}>
				<Header/> 
                <Routing/>
                <Footer/>
			</UserContext.Provider>
		</>
	)
}

export default App;