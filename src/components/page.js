import React from "react";



import EmptyPost from '../views/emptypost';



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

export class SinglePage extends React.Component{
	
	
	
	slug(){
		return this.props.match.params.slug;
	}
	
	componentDidMount() {
		
		let slug = this.slug();
		
		if( slug ){
			
			
			let url = 'http://churchbuzz.in/wp-json/wp/v2/pages?slug=' + slug;
			
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
					<hr />
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

const Page = connect( mapStateToProps, mapDispatchToProps )(SinglePage)

export default Page