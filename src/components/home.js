import React from "react";

import PostView from '../views/post';



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
		
		
		
		if( ! this.props.state.fetched ){
			
			posts = <div className="col-sm-6">
				<div className="card"></div>
			</div>
			
		}
		
		return (
			<div className="cards">{posts}</div>
		);
		
	}
	
}

const Home = connect( mapStateToProps, mapDispatchToProps )(Posts)

export default Home