import React from "react";

import PostView from '../views/post';

import EmptyPost from '../views/emptypost';

import { connect } from "react-redux";

import { fetchData } from '../actions/index';


const mapStateToProps = state => {
	
	return {
		
		state: state.posts
		
	}
}

const mapDispatchToProps = (dispatch) => {
    
	return {
		
		fetchData: (url) => dispatch( fetchData( url, "FETCH_POSTS" ) )
    
	};

};




class Posts extends React.Component{
	
	
	
	componentDidMount() {
		
		this.props.fetchData('http://churchbuzz.in/wp-json/wp/v2/posts');
			
	}
	
	render(){
		
		let posts = this.props.state.posts_arr.map((post, index) => {
			return <div key={index} className="col-sm-6">
				<PostView post={post} />
			</div>	
		});
		
		
		
		if( ! this.props.state.posts_arr.length ){
			
			posts = <div>
			<div className="col-sm-6"><div className="card"><EmptyPost /></div></div>
			<div className="col-sm-6"><div className="card"><EmptyPost /></div></div>
			<div className="col-sm-6"><div className="card"><EmptyPost /></div></div>
			<div className="col-sm-6"><div className="card"><EmptyPost /></div></div>
			</div>
			
		}
		
		return (
			<div className="cards">{posts}</div>
		);
		
	}
	
}

const Home = connect( mapStateToProps, mapDispatchToProps )(Posts)

export default Home