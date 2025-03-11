import {IS_LOGGED_IN} from '../constants';

export function toggleLogin(item) {
  return {
    type: IS_LOGGED_IN,
    data: item,
  };
}
