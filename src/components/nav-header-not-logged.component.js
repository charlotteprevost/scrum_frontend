import React, { Component } from 'react';
// import { Header, Menu, Form, Label, Button } from 'semantic-ui-react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class NavHeaderNotLogged extends Component {

	render(){
		return(
			<div className="collpase navbar-collapse">
				<ul className="navbar-nav mr-auto">
					<li className="navbar-item">
					<Link to="/login" className="nav-link">Register/Login</Link>
					</li>
					<li className="navbar-item">
					<Link to="/" className="nav-link">Home (Welcome Page)</Link>
					</li>
				</ul>
			</div>
		)
	}
}

export default NavHeaderNotLogged;