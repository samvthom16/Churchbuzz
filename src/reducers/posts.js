	
	export default function reducer(state={
		posts: {},
		posts_arr:[],
		fetching: false,
		fetched: false,
		error: null,
	}, action){
		
		switch( action.type ){
			
			case 'FETCH_POSTS':{
				
				return {...state, fetching:true}
				
			}
			
			case "FETCH_POSTS_REJECTED":{
				return {...state, fetching:false, error:action.payload}
			}
			
			case "FETCH_POSTS_FULFILLED":{
				
				let payload = action.payload;
				
				// FETCHING THE OLD POSTS DATA
				let posts = state.posts;
				
				// ITERATE THROUGH THE POSTS PAYLOAD
				for( const post of payload ){
					if( post && post.slug ){
						posts[ post.slug ] = post;
					}
				}
				
				return {
					...state,
					fetching: false,
					fetched: true,
					posts: posts,
					posts_arr: payload
				}
			}
			
			
			case "FETCH_POST_FULFILLED":{
				
				// FETCHING THE OLD POSTS DATA
				let posts = state.posts;
				
				
				if( action.payload.length ){
					
					// GET THE FIRST POST
					let payload = action.payload[0];
				
					
					if( payload && payload.slug ){
						posts[ payload.slug ] = payload;
					}
				}
				return {
					...state,
					fetching: false,
					fetched: true,
					posts: posts,
				}
			}
			
			case "FETCH_POST_REJECTED":{
				return {...state, fetching:false, error:action.payload}
			}
			
			
			default:{
				
				return{
					...state
				} 
				
			}
			
			
			
		}
			
		
	}	
