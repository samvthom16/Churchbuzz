import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import { connect } from "react-redux";



import { mapStateToProps, mapDispatchToProps, baseUrl } from '../const'


class Author extends Component {
	
	url(){
		
		let url = baseUrl + "/wp-json/wp/v2/users/";
		
		let id = this.props.id;
		
		if( id ){
			
			url = url + id;
			
		}
		
		return url;
	}
	
	componentDidMount() {
		
		let url = this.url();
		
		this.props.fetchData( url );
		
	}
	
	render() {
		
		let url = this.url();
		
		let cache = this.props.state.api.cache;
		
		let author = {};
		
		let html = '';
		
		if( cache[url] ){
			
			author = cache[url];
			
			html = <Link to={`/author/${author.slug}`}>{author.name}</Link>
			
		}
		
		
		
		return (
			<div>{html}</div>
		);
	}
}

const AuthorView = connect( mapStateToProps, mapDispatchToProps )(Author)

export default AuthorView;
