import React from 'react';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

import PostView from '../views/post';



import { connect } from "react-redux";

import Base from '../Base';

import { mapStateToProps, mapDispatchToProps, baseUrl, pagePerItems } from '../const'


class Posts extends Base{
	
	url(){
		
		let url = baseUrl + '/wp-json/wp/v2/posts?per_page=' + pagePerItems;
		
		if( this.props.author ){
			
			url += "&author=" + this.props.author;
			
		}
		
		return url;
	}
	
	getDefaultData(){
		
		// DEFAULT POST DATA
		return [{ id: 0 },{ id: 0},{ id: 0},{ id: 0},{ id: 0},{ id: 0}];
	
	}
	
	render() {
		
		let posts = this.getData();
		
		let html_class = "cards";
		
		let html =  '';
		
		if( posts.length ){
			html = <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}>
						<Masonry>
							{posts.map((post, index) => 
								<PostView key={index} post={post} />
							)}
						</Masonry>
					</ResponsiveMasonry>
					
			html_class += " cards-" + posts.length;
		}
		
		return (
			<div className={html_class}>{html}</div>
		);
	}
}

const PostsView = connect( mapStateToProps, mapDispatchToProps )(Posts)

export default PostsView;