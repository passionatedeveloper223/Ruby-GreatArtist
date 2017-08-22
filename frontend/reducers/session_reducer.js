import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS, login, logout, signup } from '../actions/session_actions';
import { merge } from 'lodash';


const defaultState = Object.freeze({
  currentUser: null,
  errors: []
});


export const SessionReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return {currentUser: action.currentUser, errors: action.errors};
    case RECEIVE_ERRORS:
      return {currentUser: null, errors: action.errors};
    default:
      return state;
  }
};