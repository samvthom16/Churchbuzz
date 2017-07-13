
import { fetchData } from './actions/index';

export const mapStateToProps = state => {
	
	return {
		
		state: state
		
	}
}

export const mapDispatchToProps = (dispatch) => {
    
	return {
		
		fetchData: (url) => dispatch( fetchData( url ) )
    
	};

};

export const baseUrl = "http://churchbuzz.in";