import React from 'react';
import Select from 'react-select';

const options = [
  { label: 'HTML', value: 'html' },
  { label: 'CSS', value: 'css' },
  { label: 'JS', value: 'js' },
];
const PostsFilter = ({ currentTag = null, onChangeTag = () => null }) => {
  return (
    <div>
      <Select
        options={options}
        value={currentTag}
        onChange={onChangeTag}
      ></Select>
    </div>
  );
};

export default PostsFilter;
