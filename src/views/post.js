import React, { Component } from 'react';

import Moment from 'react-moment';

import { Link } from 'react-router-dom';

import EmptyPost from './emptypost';

import AuthorView from './author';
import MediaView from './media';

class PostView extends Component {
	
	render() {
		
		let post = this.props.post;
		
		let link_to = {
			pathname: post.slug,
			state: post
		}
		
		let html  = <div className="card"><EmptyPost /></div>
		
		if( post.id ){
		
			html = <div className="card"><div className="card-header">
						
						<h3><Link to={link_to}><div dangerouslySetInnerHTML={ {__html: post.title.rendered } } /></Link></h3>
						
						<ul className='list-inline'>
							<li className="text-muted"><AuthorView id={post.author} /></li>
							<li className="text-muted strong"><Moment fromNow>{post.date}</Moment></li>
						</ul>
						
					</div>
					
					<div className="card-img"><MediaView id={post.featured_media} /></div>
					<div><div dangerouslySetInnerHTML={ {__html: post.excerpt.rendered } } /></div>
				</div>
		}		
				
		return (
			<div>{html}</div>	
		);
	}
}

export default PostView;
