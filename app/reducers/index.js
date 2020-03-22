'use strict';
import { combineReducers } from 'redux';
import { CountReducer } from './CountReducer';

const rootReducer = combineReducers({
	Count: CountReducer
});
export default rootReducer;