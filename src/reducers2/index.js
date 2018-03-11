/* combineReducers is not currently used, but eventually should be for modular code :D */
import { combineReducers } from 'redux'
import forecast from './forecast';
import location from './location';
import temp from './temp';

export default combineReducers({ forecast, location, temp });

export * from './temp'
export * from './location'
export * from './forecast'
