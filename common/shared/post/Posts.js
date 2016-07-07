import React, { Component, PropTypes } from 'react';

import Review from './Review';
import Wish from './Wish';

class Posts extends Component {
  componentDidMount() {
    if (this.props.type === 'date') {
      this.props.getPostsByDate();
    }
    if (this.props.type === 'friends') {
      this.props.getPostsByFriends(this.props.facebookId);
    }
  }

  renderPost(info) {
    if (info.rating) {
      return <Review key={info.Post_created_at} {...info} />;
    } else {
      return <Wish key={info.Post_created_at} {...info} />;
    }
  }
  render() {
    return (
      <div className="posts">
        {this.props.posts ? this.props.posts.map(post => this.renderPost(post)) : ''}
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
