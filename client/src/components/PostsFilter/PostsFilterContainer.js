import { connect } from 'react-redux';
import PostsFilter from './PostsFilter';
import * as postsActions from '../../redux/posts/postsActions';
import * as postsSelectors from '../../redux/posts/postsSelectors';

const mapStateToProps = state => ({
  currentTag: postsSelectors.getSelectedTag(state),
});

const mapDispatchToProps = dispatch => ({
  onChangeTag: currentTag => dispatch(postsActions.changeTag(currentTag.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostsFilter);
