import React from "react";



import EmptyPost from '../views/emptypost';



import { connect } from "react-redux";



import { mapStateToProps, mapDispatchToProps } from '../const'




export class SinglePage extends React.Component{
	
	
	
	slug(){
		
		return this.props.match.params.slug;
		
	}
	
	url(){
		
		let url = "http://churchbuzz.in/wp-json/wp/v2/pages";
		
		let slug = this.slug();
		
		if( slug ){
			
			url = url + "?slug=" + slug;
			
		}
		
		return url;
	}
	
	componentDidMount() {
		
		let url = this.url();
			
		this.props.fetchData( url );
			
	}
	
	render(){
		
		let url = this.url();
		
		let cache = this.props.state.api.cache;
		
		let page = {};
		
		let html = <EmptyPost />
		
		if( cache[url] ){
			
			page = cache[url];
			
			if( page.length ){
				
				page = page[0]
				
				html = <div>
					
						<h2>{ page.title.rendered }</h2>
						<hr />
						<div className='post-content'><div dangerouslySetInnerHTML={ {__html: page.content.rendered } } /></div>
						
					</div>
				
			}
		}
		
		
		return (
		
			<div id="page">{html}</div>
		
		);
		
	}
	
}

const Page = connect( mapStateToProps, mapDispatchToProps )(SinglePage)

export default Page