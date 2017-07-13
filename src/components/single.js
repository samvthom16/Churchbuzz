import React from "react";

import Moment from 'react-moment';

import EmptyPost from '../views/emptypost';

import AuthorView from '../views/author';
import MediaView from '../views/media';

import { connect } from "react-redux";



import { mapStateToProps, mapDispatchToProps, baseUrl } from '../const'



export class SinglePost extends React.Component{
	
	getDataFromState(){
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
	
	componentDidMount() {
		
		if( ! this.getDataFromState() ){
			
			let url = this.url();
		
			this.props.fetchData( url );
			
			
		}
		
		
			
		
	}
	
	render(){
		
		
		
		
		let post = {};
		
		let html = <EmptyPost />
		
		
		
		if( this.getDataFromState() ){
			
			// PASSED FROM THE PREVIOUS STATE
			post = this.getDataFromState();
			
		}
		else{
			
			let url = this.url();
		
			let cache = this.props.state.api.cache;
			
			if( cache[url] ){
			
				post = cache[url];
			
				if( post.length ){
				
					post = post[0]
			
				}
			}
		}
		
		
		
		if( post ){
				
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