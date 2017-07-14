import React from 'react';

import { Link } from 'react-router-dom';

import { connect } from "react-redux";

import Base from '../Base';

import { mapStateToProps, mapDispatchToProps, baseUrl } from '../const'


class Author extends Base{
	
	url(){
		
		let url = baseUrl + "/wp-json/wp/v2/users/";
		
		let id = this.props.id;
		
		if( id ){
			
			url = url + id;
			
		}
		
		return url;
	}
	
	render() {
		
		
		let author = this.getData();
		
		let html = '';
		
		if( author.name ){
			
			html = <Link to={`/author/${author.slug}`}>{author.name}</Link>
			
		}
		
		
		
		return (
			<div>{html}</div>
		);
	}
}

const AuthorView = connect( mapStateToProps, mapDispatchToProps )(Author)

export default AuthorView;
