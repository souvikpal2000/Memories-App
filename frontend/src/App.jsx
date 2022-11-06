import React, { useReducer, createContext } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Components/Header/Header";
import Routing from "./Components/Routing";
import Footer from "./Components/Footer/Footer";
import 'bootstrap/dist/css/bootstrap.min.css'; 

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