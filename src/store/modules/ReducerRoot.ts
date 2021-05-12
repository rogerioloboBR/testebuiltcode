import {combineReducers} from 'redux';

import authReducer from './Auth/reducer';

const ReducerRoot = combineReducers({
  auth: authReducer,
});

export default ReducerRoot;


