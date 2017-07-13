import React from "react"
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

import PostView from '../views/post';

import EmptyPost from '../views/emptypost';

import { connect } from "react-redux";

import { mapStateToProps, mapDispatchToProps, baseUrl } from '../const'



class Posts extends React.Component{
	
	url(){
		return baseUrl + '/wp-json/wp/v2/posts';
	}
	
	componentDidMount() {
		
		document.title = "Church Buzz";
		
		this.props.fetchData( this.url() );
			
	}
	
	render(){
		
		let url = this.url();
		
		let cache = this.props.state.api.cache;
		
		let posts = [];
		
		let posts_html = <div></div>
		
		if( cache[url] ){
			
			// API HAS BEEN REQUESTED AND DATA EXISTS IN THE CACHE
			posts = cache[url]
			
			/*
			posts_html = posts.map((post, index) => {
				return <div key={index} className="col-sm-6">
					<PostView post={post} />
				</div>	
			});
			*/
			
			console.log( posts );
			
			posts_html =  <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}>
					<Masonry>
						{posts.map((post, index) => 
							<PostView post={post} />
						)}
					</Masonry>
				</ResponsiveMasonry>
			
			console.log( posts_html );
		}
		else{
			
			posts_html = <div>
				<div className="col-sm-6"><div className="card"><EmptyPost /></div></div>
				<div className="col-sm-6"><div className="card"><EmptyPost /></div></div>
				<div className="col-sm-6"><div className="card"><EmptyPost /></div></div>
				<div className="col-sm-6"><div className="card"><EmptyPost /></div></div>
				</div>
			
		}
		
		return (
			<div className="cards">
				
				{posts_html}
				
			</div>
		);
		
	}
	
}

const Home = connect( mapStateToProps, mapDispatchToProps )(Posts)

export default Home