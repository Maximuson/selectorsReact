export const actionType = {
  FETCH_POSTS_START: 'FETCH_POSTS_START',
  FETCH_POSTS_SUCCESS: 'FETCH_POSTS_SUCCESS',
  FETCH_POSTS_ERROR: 'FETCH_POSTS_ERROR',
  CHANGE_TAG: 'CHANGE_TAG',
  DELETE_POST: 'DELETE_POST',
};

export const fetchPostsStart = () => ({
  type: actionType.FETCH_POSTS_START,
});

export const fetchPostsSuccess = posts => ({
  type: actionType.FETCH_POSTS_SUCCESS,
  payload: posts,
});

export const fetchPostsError = error => ({
  type: actionType.FETCH_POSTS_ERROR,
  payload: error,
});

export const deletePost = id => ({
  type: actionType.DELETE_POST,
  payload: id,
});

export const changeTag = filter => ({
  type: actionType.CHANGE_TAG,
  payload: filter,
});
