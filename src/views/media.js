import React, { Component } from 'react'

import { connect } from "react-redux";

import { fetchData } from '../actions/index';


const mapStateToProps = state => {
	
	return {
		
		state: state.media
		
	}
}

const mapDispatchToProps = (dispatch) => {
    
	return {
		
		fetchData: (url) => dispatch( fetchData( url, "FETCH_MEDIA" ) )
    
	};

};


class Media extends Component {
	
	
	componentDidMount() {
		
		let id = this.props.id;
		
		if( id ){
		
			let url = "http://churchbuzz.in/wp-json/wp/v2/media/" + this.props.id;
			
			this.props.fetchData(url);
			
		}		
	}
	
	render() {
		
		
		let media = this.props.state.media[this.props.id];
		
		let html = '';
		
		if( media && media.source_url ){
			html = <img alt={media.alt_text} src={media.source_url} />
		}
		
		
		return (
			
			<div className="img-parent">{html}</div>
			
			
		);
	}
}

const MediaView = connect( mapStateToProps, mapDispatchToProps )(Media)


export default MediaView
