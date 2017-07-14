	
	export default function reducer(state={
		cache: {},
		fetching: false,
		fetched: false,
		error: null,
	}, action){
		
		switch( action.type ){
			
			case 'FETCH':{
				
				return {...state, fetching:true}
				
			}
			
			case "FETCH_REJECTED":{
				
				return {...state, fetching:false, error:action.payload}
			
			}
			
			case "FETCH_FULFILLED":{
				
				let cache = state.cache;
				
				cache[ action.payload.url ] = action.payload;
				
				return {
					...state,
					fetching: false,
					fetched: true,
					cache: cache,
				}
				
			}
			
			
			default:{
				
				return{
					...state
				} 
				
			}
			
			
			
		}
			
		
	}	
