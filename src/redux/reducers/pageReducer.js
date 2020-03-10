// Initial State
import _ from 'lodash';
const initialState = {
    pageData: []
  };
  
  // Reducers (Modifies The State And Returns A New State)
  const pageReducer = (state = initialState, action) => {
    switch (action.type) {

      case 'SET_PAGE_STATE': {
        return {
          
        }
      }

      // Default
      default: {
        return state;
      }
    }
  };

  
  export default pageReducer;