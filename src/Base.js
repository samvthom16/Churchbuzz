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
	
	getCache(){
		
		return this.props.state.api.cache;
		
	}
	
	getTotalPages(){
		
		let url = this.url();
		
		if( url.length ){	
		
			let cache = this.getCache();
			
			if( cache[url] ){
			
				return cache[url].total_pages;
				
			}
		}
		
		return 0;
	}
	
	getData(){
		
		let url = this.url();
		
		if( url.length ){	
		
			let cache = this.getCache();
		
			if( cache[url] ){
			
				return cache[url].result;
			
			}
		
		}
		
		// DEFAULT POST DATA
		return this.getDefaultData();
		
	}
	
}
