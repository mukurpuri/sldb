// Initial State
const initialState = {
  loggedIn: false,
  demoData: null
};

// Reducers (Modifies The State And Returns A New State)
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    // Login
    case 'LOGIN': {
      return {
        // State
        ...state,
        // Redux Store
        loggedIn: action.trueFalse,
      }
    }

    case 'GET_DEMO_DATA': {
      return {
        ...state,
        demoData: action.data,
      }
    }

    // Default
    default: {
      return state;
    }
  }
};

// Exports
export default authReducer;