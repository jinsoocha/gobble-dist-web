import React, { Component, PropTypes } from 'react';

import Review from './Review';
import Wish from './Wish';

class Posts extends Component {

  renderPost(info) {
    if (info.rating) {
      return <Review {...info} />;
    } else {
      return <Wish {...info} />;
    }
  }
  render() {
    return (
      <div className="postbits">
        {this.props.posts.map(post => this.renderPost(post))}
      </div>
    );
  }
}

Posts.propTypes = {
  posts: PropTypes.array.isRequired
};

export default Posts;
