import React, { Component } from 'react';

import { connect } from "react-redux";

import { fetchData } from '../actions/index';


const mapStateToProps = state => {
	
	return {
		
		state: state.author
		
	}
}

const mapDispatchToProps = (dispatch) => {
    
	return {
		
		fetchData: (url) => dispatch( fetchData( url, "FETCH_AUTHOR" ) )
    
	};

};

class Author extends Component {
	
	componentDidMount() {
		
		let id = this.props.id;
		
		if( id ){
			
			let url = "http://churchbuzz.in/wp-json/wp/v2/users/" + this.props.id;
			
			this.props.fetchData(url);
			
		}	
	}
	
	render() {
		
		
		let author = this.props.state.author[this.props.id];
		
		let authorhtml = '';
		
		if( author && author.name ){
			
			
			
			authorhtml = author.name
		}
		
		return (
			<div>{authorhtml}</div>
		);
	}
}

const AuthorView = connect( mapStateToProps, mapDispatchToProps )(Author)

export default AuthorView;
