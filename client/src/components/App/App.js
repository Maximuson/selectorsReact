import React, { Component } from 'react';
import posts from '../../posts.json';
import PostList from '../PostList/PostListContainer';
import PostsFilter from '../PostsFilter/PostsFilterContainer';
import Header from '../Header/Header';

class App extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    const { isPostsLoading } = this.props;

    let content = null;
    if (isPostsLoading) {
      content = 'Loading...';
    } else {
      content = (
        <>
          <PostsFilter />
          <PostList />
        </>
      );
    }
    return (
      <div className="App">
        <Header />
        {content}
      </div>
    );
  }
}

export default App;
