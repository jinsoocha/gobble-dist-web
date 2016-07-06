import React, { Component, PropTypes } from 'react';

class ProfileViewOptions extends Component {
  constructor(props) {
    super(props);
    this.showPostsView = this.showPostsView.bind(this);
    this.showFollowingView = this.showFollowingView.bind(this);
    this.showFollowersView = this.showFollowersView.bind(this);
  }

  showPostsView() {
    this.props.changeProfileView('posts');
  }

  showFollowingView() {
    this.props.changeProfileView('following');
  }

  showFollowersView() {
    this.props.changeProfileView('followers');
  }

  render() {
    const { numPosts, numFollowing, numFollowers } = this.props;
    return (
      <div className="profile-view-bar">
        <ul className="profile-view-list">
          <li className="profile-view-option" onClick={this.showPostsView}>
            <span className="option-number">{numPosts}</span>
            <span className="option-type">Posts</span>
          </li>
          <li className="profile-view-option" onClick={this.showFollowingView}>
            <span className="option-number">{numFollowing}</span>
            <span className="option-type">Following</span>
          </li>
          <li className="profile-view-option" onClick={this.showFollowersView}>
            <span className="option-number">{numFollowers}</span>
            <span className="option-type">Followers</span>
          </li>
        </ul>
      </div>
    );
  }
}

ProfileViewOptions.propTypes = {
  numPosts: PropTypes.number.isRequired,
  numFollowing: PropTypes.number.isRequired,
  numFollowers: PropTypes.number.isRequired,
  changeProfileView: PropTypes.func.isRequired
};

export default ProfileViewOptions;
