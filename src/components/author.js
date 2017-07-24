import React from "react";

import EmptyPost from '../views/emptypost'
import PostsView from '../views/posts'

import { connect } from "react-redux";

import Base from '../Base';

import { mapStateToProps, mapDispatchToProps, baseUrl } from '../const'

export class AuthorPage extends Base{
	
	getDataFromState(){
		
		// GET DATA FROM PREVIOUS STATE
		return this.props.location.state;
	
	}
	
	url(){
		
		let slug = this.slug();
		
		let url = baseUrl + "/wp-json/wp/v2/users";
		
		if( slug ){
			
			url = url + "?slug=" + slug;
			
		}
		
		return url;
		
	}
	
	slug(){
		
		return this.props.match.params.slug;
		
	}
	
	getData(){
		
		if( this.getDataFromState() ){
			
			// PASSED FROM THE PREVIOUS STATE
			return this.getDataFromState();
			
		}
		else{
		
			let author = super.getData();
			
			if( Array.isArray( author ) ){
				
				author = author[0]
				
			}
			
			return author;
			
		}	
	}
	
	componentDidMount() {
		
		if( !this.getDataFromState() ){
		
			super.componentDidMount();
		
		}
		
	}
	
	render(){
		
		let author = this.getData();
		
		let html = <EmptyPost />
		
		if( author.name ){
			
			
				
			html = <div>
						<div className='media author-info'>
							<div className='media-left'><img alt={author.name} src={author.avatar_urls['96']} /></div>
							<div className='media-body'>
								<h2><div dangerouslySetInnerHTML={ {__html: author.name } } /></h2>
								<div dangerouslySetInnerHTML={ {__html: author.description } } />
							</div>
						</div>
						<PostsView author={author.id} />
					</div>
				
		}
		
		
		return (
		
			<div>{html}</div>
		
		);
		
	}
	
}

const Author = connect( mapStateToProps, mapDispatchToProps )(AuthorPage)

export default Author