import {
  fetchPostsStart,
  fetchPostsSuccess,
  fetchPostsError,
} from './postsActions';
import axios from 'axios';

export const fetchPosts = () => dispatch => {
  dispatch(fetchPostsStart());

  axios
    .get(`http://localhost:3030/data`)
    .then(data => {
      dispatch(fetchPostsSuccess(data.data));
    })
    .catch(error => {
      dispatch(fetchPostsError(error));
    });
};
