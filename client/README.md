## Selectors with params using reselect

`getMemoizedPostsWithTag:`

```js
import { createSelector } from 'reselect';

/* Structure
  export const getYourData = (state, params) => createSelector(...)(state)
*/


export const getMemoizedPostsWithTag = (state, tag) =>
  createSelector(getPosts, posts =>
    tag ? posts.filter(item => item.tag === tag) : posts,
  )(state);
```

### Using selector with params

```js
const mSTP = state => ({
  items: postsSelectors.getMemoizedPostsWithTag(state, 'js'),
});
```
