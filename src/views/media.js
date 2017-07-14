import React from 'react'

import { connect } from "react-redux";



import { mapStateToProps, mapDispatchToProps, baseUrl } from '../const'

import Base from '../Base';

class Media extends Base{
	
	url(){
		
		let url = baseUrl + "/wp-json/wp/v2/media/";
		
		let id = this.props.id;
		
		if( id ){
		
			url = url + id;
		
		}
		
		return url;
		
	}
	
	
	
	render() {
		
		let media = this.getData();
		
		let html = '';
		
		if( media.source_url ){
			
			html = <img alt={media.alt_text} src={media.source_url} />
			
		}
		
		return (
			
			<div className="img-parent">{html}</div>
			
		);
	}
}

const MediaView = connect( mapStateToProps, mapDispatchToProps )(Media)


export default MediaView
