import React, { Component, PropTypes } from 'react';

class MainLayout extends Component {
  componentWillMount() {
    this.props.fetchUserIsAuth();
  }

  render() {
    return (
      <div className="main-layout">
        <h3>{this.props.userIsAuth}</h3>
        {this.props.children}
      </div>
    );
  }
}

MainLayout.propTypes = {
  userIsAuth: PropTypes.bool.isRequired,
  fetchUserIsAuth: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired
};

export default MainLayout;
