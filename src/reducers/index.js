import { combineReducers } from 'redux';

import userReducer from './reducer';

const rootReducer = combineReducers({
  reducer: userReducer,
});

export default rootReducer;