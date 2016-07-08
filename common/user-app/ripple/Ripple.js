import React from 'react';
import RippleMap from './RippleMap.js';
import AddPostContainer from './../../shared/add-post/AddPostContainer';
import Posts from '../../shared/post/PostContainer';

const Ripple = () => (
  <div className="ripple-view">
    <div className="pure-g">
      <div className="pure-u-12-24">
        <RippleMap />
      </div>
      <div className="pure-u-8-24">
        <AddPostContainer />
        <Posts type="ripple" />
      </div>
    </div>
  </div>
);

export default Ripple;
