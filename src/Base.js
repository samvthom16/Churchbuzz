import React from "react"

export default class Base extends React.Component{
	
	getDefaultData(){
		return {};
	}
	
	url(){
		
		return '';
	
	}
	
	componentDidMount() {
		
		let url = this.url();
		
		if( url ){
			
			this.props.fetchData( url );
			
		}
			
	}
	
	getData(){
		
		let url = this.url();
		
		if( url.length ){	
		
			let cache = this.props.state.api.cache;
		
			if( cache[url] ){
			
				return cache[url].result;
			
			}
		
		}
		
		// DEFAULT POST DATA
		return this.getDefaultData();
		
	}
	
}
