import { connect } from 'react-redux';
import PostList from './PostList';
import * as postsSelectors from '../../redux/posts/postsSelectors';
import * as postsActions from '../../redux/posts/postsActions';

const mSTP = state => ({
  // items: postsSelectors.getPostsWithSelectedTag(state, 'js'),
  items: postsSelectors.getMemoizedPostsWithTag(state, 'js'),
});

const mDTP = dispatch => ({
  deletePost: id => dispatch(postsActions.deletePost(id)),
});
export default connect(mSTP, mDTP)(PostList);
