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
      return <Review {...info} />;
    } else {
      return <Wish {...info} />;
    }
  }
  render() {
    console.log('rendered once');
    return (
      <div className="postbits">
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
