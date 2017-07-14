import React from "react"

export default class Base extends React.Component{
	
	getDefaultData(){
		return {};
	}
	
	url(){
		
		return '';
	
	}
	
	componentDidMount() {
		
		this.props.fetchData( this.url() );
			
	}
	
	getData(){
		
		let url = this.url();
		
		let cache = this.props.state.api.cache;
		
		if( cache[url] ){
			
			
			
			return cache[url].result;
			
		}
		
		// DEFAULT POST DATA
		return this.getDefaultData();
		
	}
	
}
