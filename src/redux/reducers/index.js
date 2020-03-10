// Imports: Dependencies
import { combineReducers } from 'redux';

// Imports: Reducers
import authReducer from './authReducer';
import counterReducer from './counterReducer';
import dataReducer from './dataReducer';
import pageReducer from './pageReducer';

// Redux: Root Reducer
const rootReducer = combineReducers({
  authReducer: authReducer,
  counterReducer: counterReducer,
  dataReducer: dataReducer,
  pageReducer: pageReducer
});

// Exports
export default rootReducer;