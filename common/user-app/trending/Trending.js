import React from 'react';

import Posts from '../../shared/post/PostContainer';

const trending = () => {
  return (
    <div className="trending-view">
      <Posts type="date" />
    </div>
  );
};

export default trending;
