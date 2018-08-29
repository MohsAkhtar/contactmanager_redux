import { combineReducers } from 'redux';
import contactReducer from './contactReducer';

// this is the root reducer, it is a meeting place for all reducers
// below is object for all our reducers in this case we only have contact

export default combineReducers({
  contact: contactReducer
});
