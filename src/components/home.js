import React from "react"
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

import PostView from '../views/post';

import Base from '../Base';

import { connect } from "react-redux";

import { mapStateToProps, mapDispatchToProps, baseUrl, pagePerItems } from '../const'



class Posts extends Base{
	
	url(){
		
		return baseUrl + '/wp-json/wp/v2/posts?per_page=' + pagePerItems;
	
	}
	
	componentDidMount() {
		
		document.title = "Church Buzz";
		
		super.componentDidMount();
			
	}
	
	getDefaultData(){
		
		// DEFAULT POST DATA
		return [{ id: 0 },{ id: 0},{ id: 0},{ id: 0},{ id: 0},{ id: 0}];
	
	}
	
	render(){
		
		let posts = this.getData();
		
		let html =  <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}>
						<Masonry>
							{posts.map((post, index) => 
								<PostView post={post} />
							)}
						</Masonry>
					</ResponsiveMasonry>
		
		return (
			<div className="cards">{html}</div>
		);
		
	}
	
}

const Home = connect( mapStateToProps, mapDispatchToProps )(Posts)

export default Home