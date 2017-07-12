
export function fetchData( url, type ){
	
	return function( dispatch ){
		
		fetch(url)
		.then(res => {
			
			let json = res.json()
			
			json.then(
				
				res => {
					
					dispatch({type: type + "_FULFILLED", payload: res });
					
				}
				
			)
			
		})
		.catch(err => {
			
			dispatch({ type: type + "_REJECTED", payload: err });	
			
		})
		
	}
	
	
	
}
