import React from "react";

import Moment from 'react-moment';

import EmptyPost from '../views/emptypost';

import AuthorView from '../views/author';
import MediaView from '../views/media';

import { connect } from "react-redux";

import { fetchData } from '../actions/index';


const mapStateToProps = state => {
	
	return {
		
		state: state.posts
		
	}
}

const mapDispatchToProps = (dispatch) => {
    
	return {
		
		fetchData: (url) => dispatch( fetchData( url, "FETCH_POST" ) )
    
	};

};

export class SinglePost extends React.Component{
	
	
	
	slug(){
		return this.props.match.params.slug;
	}
	
	componentDidMount() {
		
		let slug = this.slug();
		
		if( slug ){
			
			
			let url = 'http://churchbuzz.in/wp-json/wp/v2/posts?slug=' + slug;
			
			this.props.fetchData( url );
			

		}
		
		
	}
	
	render(){
		
		let slug = this.slug();
		
		let post = this.props.state.posts[ slug ];
		
		let html = <EmptyPost />
		
		if( post && post.id ){
			
			
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
		
			<div id="page">
				
				{html}
				
			</div>
		
		);
		
	}
	
}

const Single = connect( mapStateToProps, mapDispatchToProps )(SinglePost)

export default Single