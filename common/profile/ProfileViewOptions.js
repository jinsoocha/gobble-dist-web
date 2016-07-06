import React, { Component, PropTypes } from 'react';

class ProfileViewOptions extends Component {
  constructor(props) {
    super(props);
    this.showFeedView = this.showFeedView.bind(this);
    this.showFollowingView = this.showFollowingView.bind(this);
    this.showFollowersView = this.showFollowersView.bind(this);
  }

  showFeedView() {
    this.props.changeProfileView('feed');
  }

  showFollowingView() {
    this.props.changeProfileView('following');
  }

  showFollowersView() {
    this.props.changeProfileView('followers');
  }

  render() {
    return (
      <div className="profile-view-bar">
        <ul className="profile-view-list">
          <li className="profile-view-option" onClick={this.showFeedView}>
            <span>Feed</span>
          </li>
          <li className="profile-view-option" onClick={this.showFollowingView}>
            <span>Following</span>
          </li>
          <li className="profile-view-option" onClick={this.showFollowersView}>
            <span>Followers</span>
          </li>
        </ul>
      </div>
    );
  }
}

ProfileViewOptions.propTypes = {
  changeProfileView: PropTypes.func.isRequired
};

export default ProfileViewOptions;
