import React from 'react';
import Post from './Post';

function Feed() {
  return (
    <div className="p-4 rounded-lg bg-white shadow-md flex flex-col gap-8">
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
}

export default Feed;
