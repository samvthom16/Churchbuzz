import React, { Component } from 'react';

import './App.css';

import AppHeader from './header';


import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

import { Provider } from "react-redux";
import store from "./store";

import Single from "./components/user";
import Home from "./components/home";



class App extends Component {
	
	render() {
		
		return (
			<Provider store={store}>
				<div className="App">
					<AppHeader />
					<Router>
						<div className="container-fluid">
							<div className='row'>
								<nav className="navbar navbar-default">
									
									<div className="navbar-header">
										
										<ul className="nav navbar-nav">
											
											<li><NavLink to="/">Home</NavLink></li>
											
											<li><NavLink to="/user">User</NavLink></li>
										
										</ul>
										
									</div>
								
								</nav>
							</div>
							<Route exact path="/" component={Home} />
							<Route path="/user" component={Single} />
							<Route path="/:slug" component={Single} />
						</div>			
					</Router>
				</div>
			</Provider>
		);
	}
}

export default App;
