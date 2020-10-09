import { connect } from 'react-redux';
import App from './App';
import * as postsActions from '../../redux/posts/postsActions';
import * as postsOperations from '../../redux/posts/postsOperations';
import * as postsSelectors from '../../redux/posts/postsSelectors';

const mSTP = state => ({
  isPostsLoading: postsSelectors.getIsPostsLoading(state),
});

// const mDTP = {
//   fetchPosts: postsOperations.fetchPosts,
// };

const mDTP = dispatch => ({
  fetchPosts: () => dispatch(postsOperations.fetchPosts()),
});
export default connect(mSTP, mDTP)(App);
