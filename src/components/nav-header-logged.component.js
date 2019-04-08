import React, { Component } from 'react';
import { Header, Menu } from 'semantic-ui-react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import serverURL from '../serverURL.js';

class NavHeaderLogged extends Component {

	// handleLogout = async () => {
	//     try {
	//       const logoutRequest = await fetch(serverURL + 'auth/logout', {
	//         credentials: 'include'
	//       });

	//       const parsedResponse = await logoutRequest.json();

	//       console.log(`parsedResponse from Logout: `, parsedResponse);

	//       this.props.updatePageShowing('Login');

	//     } catch(err){
	//         console.log('Error: ', err);
	//     }
  	// }

	render(){
	return(
		<div className="collpase navbar-collapse">
		<ul className="navbar-nav mr-auto">
			<li className="navbar-item">
			<Link to="/profile" className="nav-link">Profile</Link>
			</li>
			<li className="navbar-item">
			<Link to="/" className="nav-link">Home (Scrums Pages)</Link>
			</li>
		</ul>
	</div>
)
	}
}

export default NavHeaderLogged;