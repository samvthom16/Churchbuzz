import React from "react"

import PostsView from '../views/posts';

import Base from '../Base';

import { connect } from "react-redux";

import { mapStateToProps, mapDispatchToProps } from '../const'



class HomePosts extends Base{
	
	componentDidMount() {
		
		document.title = "Church Buzz";
		
		super.componentDidMount();
			
	}
	
	render(){
		
		return (
			<div className="cards"><PostsView /></div>
		);
		
	}
	
}

const Home = connect( mapStateToProps, mapDispatchToProps )(HomePosts)

export default Home