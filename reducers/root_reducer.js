import { combineReducers } from 'redux';
import nav from './nav_reducer';
import entities from './entities_reducer';

const RootReducer = combineReducers({
    // entities,
    navigation: nav
});

export default RootReducer;