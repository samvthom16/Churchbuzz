import React, { Component } from 'react';

import './css/App.css';

import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

import { Provider } from "react-redux";
import store from "./store";

import Single from "./components/single";
import Home from "./components/home";
import Page from "./components/page";
import Author from "./components/author";



class App extends Component {
	
	render() {
		
		return (
			<Provider store={store}>
				<div className="App">
					
					<Router>
						<div className="container-fluid">
							
							<div className="row header-logo">
								<div className="col-sm-12">
									<NavLink to="/">
										<img src="http://churchbuzz.in/wp-content/uploads/2016/11/CHURCH-BUZZ-LOGO-01.png" className="App-logo" alt="logo" />
									</NavLink>	
								</div>
							</div>
					
							<div className='row'>
								
									<ul id="primary-navigation" className="list-inline">
										<li><NavLink to="/">Home</NavLink></li>
										<li><NavLink to="/page/about-us">About Us</NavLink></li>
									</ul>
									
							</div>
							<div id="page-container" className='container'>
								<div className='row'>
									<div className="col-sm-12">
										<Route exact path="/" component={Home} />
										<Route exact path="/:slug" component={Single} />
										<Route exact path="/page/:slug" component={Page} />
										<Route exact path="/author/:slug" component={Author} />
									</div>
								</div>
							</div>
						</div>			
					</Router>
				</div>
			</Provider>
		);
	}
}

export default App;
