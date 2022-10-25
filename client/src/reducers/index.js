import { combineReducers } from 'redux';
import dogs from './dogs';
import temperament from './temperaments';

const rootReducer = combineReducers({
	dogs,
	temperament,
});

export default rootReducer;
