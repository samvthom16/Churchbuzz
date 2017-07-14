import React from "react";

import Moment from 'react-moment';

import EmptyPost from '../views/emptypost';

import AuthorView from '../views/author';
import MediaView from '../views/media';

import { connect } from "react-redux";

import Base from '../Base';

import { mapStateToProps, mapDispatchToProps, baseUrl } from '../const'



export class SinglePost extends Base{
	
	getDataFromState(){
		
		// GET DATA FROM PREVIOUS STATE
		return this.props.location.state;
	
	}
	
	url(){
		
		let slug = this.slug();
		
		let url = baseUrl + "/wp-json/wp/v2/posts";
		
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
		
		
			let post = super.getData();
			
			if( Array.isArray( post ) ){
				
				post = post[0]
				
			}
			
			return post;
			
		}	
	}
	
	
	componentDidMount() {
		
		if( !this.getDataFromState() ){
		
			super.componentDidMount();
		
		}
		
	}
	
	render(){
		
		let post = this.getData();
		
		let html = <EmptyPost />
		
		if( post.title ){
				
			html = <div>
					
						<h2>{ post.title.rendered }</h2>
						
						<ul className='list-inline'>
							<li className="text-muted"><AuthorView id={post.author} /></li>
							<li className="text-muted strong"><Moment fromNow>{post.date}</Moment></li>
						</ul>
						<br />
						<MediaView id={post.featured_media} />
						
						<div className='post-content'><div dangerouslySetInnerHTML={ {__html: post.content.rendered } } /></div>
						
					</div>
				
		}
		
		
		return (
		
			<div id="page">{html}</div>
		
		);
		
	}
	
}

const Single = connect( mapStateToProps, mapDispatchToProps )(SinglePost)

export default Single