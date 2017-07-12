	
	export default function reducer(state={
		media: {},
		fetching: false,
		fetched: false,
		error: null,
	}, action){
		
		switch( action.type ){
			
			case 'FETCH_MEDIA':{
				
				return {...state, fetching:true}
				
			}
			
			case "FETCH_MEDIA_REJECTED":{
				
				return {...state, fetching:false, error:action.payload}
			
			}
			
			case "FETCH_MEDIA_FULFILLED":{
				
				// FETCHING THE OLD MEDIA DATA
				let media = state.media;
				
				if( action.payload && action.payload.id ){
				
					media[ action.payload.id ] = action.payload;
				
				}
				
				return {
					...state,
					fetching: false,
					fetched: true,
					media: media,
				}
			}
			
			default:{
				
				return{
					...state
				} 
				
			}
			
			
			
		}
			
		
	}	
