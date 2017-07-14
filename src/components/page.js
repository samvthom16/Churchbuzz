import React from "react";

import Base from '../Base';

import EmptyPost from '../views/emptypost';



import { connect } from "react-redux";



import { mapStateToProps, mapDispatchToProps, baseUrl } from '../const'




export class SinglePage extends Base{
	
	
	
	slug(){
		
		return this.props.match.params.slug;
		
	}
	
	url(){
		
		let url = baseUrl + "/wp-json/wp/v2/pages";
		
		let slug = this.slug();
		
		if( slug ){
			
			url = url + "?slug=" + slug;
			
		}
		
		return url;
	}
	
	getData(){
		
		let post = super.getData();
			
		if( Array.isArray( post ) ){
				
			post = post[0]
				
		}
			
		return post;
			
			
	}
	
	render(){
		
		
		
		let page = this.getData();
		
		let html = <EmptyPost />
		
		if( page.title ){
				
			html = <div>
					
					<h2>{ page.title.rendered }</h2>
					<hr />
					<div className='post-content'><div dangerouslySetInnerHTML={ {__html: page.content.rendered } } /></div>
				</div>
				
		}
		
		
		
		return (
		
			<div id="page">{html}</div>
		
		);
		
	}
	
}

const Page = connect( mapStateToProps, mapDispatchToProps )(SinglePage)

export default Page