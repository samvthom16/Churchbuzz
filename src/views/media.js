import React, { Component } from 'react'

import { connect } from "react-redux";



import { mapStateToProps, mapDispatchToProps, baseUrl } from '../const'




class Media extends Component {
	
	url(){
		
		let url = baseUrl + "/wp-json/wp/v2/media/";
		
		let id = this.props.id;
		
		if( id ){
		
			url = url + id;
		
		}
		
		return url;
		
	}
	
	componentDidMount() {
		
		let url = this.url();
		
		this.props.fetchData(url);
			
				
	}
	
	render() {
		
		let url = this.url();
		
		let cache = this.props.state.api.cache;
		
		let media = {};
		
		let html = '';
		
		if( cache[url] ){
			
			media = cache[url];
			
			html = <img alt={media.alt_text} src={media.source_url} />
			
		}
		
		
		
		
		return (
			
			<div className="img-parent">{html}</div>
			
			
		);
	}
}

const MediaView = connect( mapStateToProps, mapDispatchToProps )(Media)


export default MediaView
