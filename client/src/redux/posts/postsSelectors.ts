import { createSelector } from 'reselect';

export const getPosts = (state: any) => state.posts.items;

export const getSelectedTag = (state: any) => state.posts.selectedTag;

export const getIsPostsLoading = (state: any) => state.posts.loading;

export const getPostsWithSelectedTag = (state: any, tag: String) => {
  const posts = getPosts(state);
  return tag ? posts.filter((item: any) => item.tag === tag) : posts;
};

export const getMemoizedPostsWithTag = (state: any, tag: String) =>
  createSelector(getPosts, posts =>
    tag ? posts.filter((item: any) => item.tag === tag) : posts,
  )(state);
