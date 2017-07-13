import React, { Component } from 'react';

import './App.css';

import AppHeader from './header';


import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

import { Provider } from "react-redux";
import store from "./store";

import Single from "./components/user";
import Home from "./components/home";
import Page from "./components/page";



class App extends Component {
	
	render() {
		
		return (
			<Provider store={store}>
				<div className="App">
					<AppHeader />
					<Router>
						<div className="container-fluid">
							
							<div className='row'>
								
									<ul id="primary-navigation" className="list-inline">
										<li><NavLink to="/">Home</NavLink></li>
										<li><NavLink to="/page/about-us">About Us</NavLink></li>
									</ul>
									
							</div>
							<Route exact path="/" component={Home} />
							<Route exact path="/:slug" component={Single} />
							<Route exact path="/page/:slug" component={Page} />
							
						</div>			
					</Router>
				</div>
			</Provider>
		);
	}
}

export default App;
