import React, { Component, PropTypes } from 'react';

class PostTypeBar extends Component {
  constructor(props) {
    super(props);
    this.showReviewPost = this.showReviewPost.bind(this);
    this.showWishPost = this.showWishPost.bind(this);
    this.showStreamPost = this.showStreamPost.bind(this);
  }

  showReviewPost() {
    this.props.changePostType('review');
  }

  showWishPost() {
    this.props.changePostType('wish');
  }

  showStreamPost() {
    this.props.changePostType('stream');
  }

  render() {
    return (
      <div className="post-type-bar">
        <ul className="post-type-list">
          <li className="post-type-option" onClick={this.showReviewPost}>
            <span>Review</span>
          </li>
          <li className="post-type-option" onClick={this.showWishPost}>
            <span>Wish</span>
          </li>
          <li className="post-type-option" onClick={this.showStreamPost}>
            <span>Stream</span>
          </li>
        </ul>
      </div>
    );
  }
}

PostTypeBar.propTypes = {
  changePostType: PropTypes.func.isRequired
};

export default PostTypeBar;
