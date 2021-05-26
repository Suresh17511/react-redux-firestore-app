import {combineReducers} from 'redux';
import {authReducer} from './authReducer';
import {projectReducer} from './projectReducer';

const rootReducer = combineReducers({
  project: projectReducer,
  auth: authReducer,
});

export default rootReducer;
