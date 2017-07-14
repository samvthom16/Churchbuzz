
export function fetchData( url ){
	
	return function( dispatch ){
		
		fetch(url)
		.then(res => {
			
			let total_pages = res.headers.get('X-WP-TotalPages');
			
			if( ! total_pages ){
				
				total_pages = 0;
				
			}
			
			let json = res.json()
			
			json.then(
				
				res => {
					
					let payload = {
						url: url,
						result: res,
						total_pages: total_pages
					}
					
					dispatch({type: "FETCH_FULFILLED", payload: payload });
					
				}
				
			)
			
		})
		.catch(err => {
			
			dispatch({ type: "FETCH_REJECTED", payload: err });	
			
		})
		
	}
	
	
	
}


