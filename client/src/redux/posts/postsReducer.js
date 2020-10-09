import { combineReducers } from 'redux';
import { actionType } from './postsActions';

const itemsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case actionType.FETCH_POSTS_SUCCESS:
      return payload;

    case actionType.DELETE_POST:
      return state.filter(item => item.id !== payload);

    default:
      return state;
  }
};

const tagReducer = (state = null, { type, payload }) => {
  switch (type) {
    case actionType.CHANGE_TAG:
      return payload;
    default:
      return state;
  }
};

const loadingReducer = (state = false, { type, payload }) => {
  switch (type) {
    case actionType.FETCH_POSTS_START:
      return true;

    case actionType.FETCH_POSTS_SUCCESS:
    case actionType.FETCH_POSTS_ERROR:
      return false;
    default:
      return state;
  }
};

const errorReducer = (state = null, { type, payload }) => {
  switch (type) {
    case actionType.FETCH_POSTS_ERROR:
      return payload;

    case actionType.FETCH_POSTS_START:
    case actionType.FETCH_POSTS_SUCCESS:
      return null;

    default:
      return state;
  }
};

export default combineReducers({
  items: itemsReducer,
  selectedTag: tagReducer,
  loading: loadingReducer,
  error: errorReducer,
});
