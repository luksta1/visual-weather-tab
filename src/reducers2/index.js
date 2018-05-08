/* combineReducers is not currently used, but eventually should be for modular code :D */
import { combineReducers } from 'redux'
import forecast from './forecast';
import location from './location';
import temp from './temp';
import news from './news';


export default combineReducers({ forecast, location, temp, news });

export * from './temp'
export * from './location'
export * from './forecast'
export * from './news'
