import React, { Component, PropTypes } from 'react';

import Review from './Review';
import Wish from './Wish';

class Posts extends Component {
  componentDidMount() {
    switch (this.props.type) {
      case 'friends':
        this.props.getPostsByFriends(this.props.facebookId);
        break;
      case 'ripple':
        this.props.getPostsByRipple(this.props.facebookId);
        break;
      case 'profile':
        this.props.getPostsByUserId(this.props.facebookId);
        break;
      default: // date
        this.props.getPostsByDate();
    }
  }

  renderPost(info) {
    if (info.rating) {
      return <Review key={info.postId} {...info} />;
    } else {
      return <Wish key={info.postId} {...info} />;
    }
  }
  render() {
    return (
      <div className="posts">
        {this.props.posts ? this.props.posts.map(post => this.renderPost(post)) : null}
      </div>
    );
  }
}

Posts.propTypes = {
  posts: PropTypes.array,
  type: PropTypes.string.isRequired,
  getPostsByDate: PropTypes.func,
  getPostsByFriends: PropTypes.func
};

export default Posts;
