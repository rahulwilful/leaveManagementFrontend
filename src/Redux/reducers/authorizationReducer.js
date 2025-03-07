import {IS_LOGGED_IN} from '../constants';

const isLoggedIn = false;

export const authReducer = (state = isLoggedIn, action) => {
  switch (action.type) {
    case IS_LOGGED_IN:
      return action.data;
    default:
      return state;
  }
};
