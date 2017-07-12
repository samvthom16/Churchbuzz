	
	export default function reducer(state={
		author: {},
		fetching: false,
		fetched: false,
		error: null,
	}, action){
		
		switch( action.type ){
			
			case 'FETCH_AUTHOR':{
				
				return {...state, fetching:true}
				
			}
			
			case "FETCH_AUTHOR_REJECTED":{
				
				return {...state, fetching:false, error:action.payload}
			
			}
			
			case "FETCH_AUTHOR_FULFILLED":{
				
				// FETCHING THE OLD AUTHOR DATA
				let author = state.author;
				
				author[ action.payload.id ] = action.payload;
				
				return {
					...state,
					fetching: false,
					fetched: true,
					author: author,
				}
			}
			
			default:{
				
				return{
					...state
				} 
				
			}
			
			
			
		}
			
		
	}	
