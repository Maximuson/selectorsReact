import React from 'react';

const PostList = ({ items = [], deletePost }) => {
  console.log(items);
  return (
    <ul>
      {items.map(({ id, text, tag }) => (
        <li key={id}>
          <p>{text}</p>
          <button
            onClick={() => {
              deletePost(id);
            }}
            type="button"
          >
            Delete
          </button>
          <p>{tag}</p>
        </li>
      ))}
    </ul>
  );
};
export default PostList;
