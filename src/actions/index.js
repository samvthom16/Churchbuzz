
export function fetchData( url ){
	
	return function( dispatch ){
		
		fetch(url)
		.then(res => {
			
			let json = res.json()
			
			json.then(
				
				res => {
					
					let payload = {
						url: url,
						result: res
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
