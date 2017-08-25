import { RECEIVE_SINGLE_USER, requestSingleUser } from '../actions/user_actions';
import { SEND_NEW_POST, createNewPost } from '../actions/post_actions';
import { merge } from 'lodash';

export const postsReducer = ( state = {}, action ) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_SINGLE_USER:
      newState = merge({}, state, action.posts);
      return newState;
    case SEND_NEW_POST:
      newState = merge({}, state, {[action.post.id]: action.post});
      return newState;
    default:
    return state;
  }
};
