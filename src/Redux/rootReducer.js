import {combineReducers} from 'redux';

import {userReducer} from './reducers/userReducer.js';
import {itemReducer} from './reducers/itemReducer.js';
import {authReducer} from './reducers/authorizationReducer.js';

export default combineReducers({
  auth: authReducer,
});
