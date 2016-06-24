import React, { Component, PropTypes } from 'react';

class MainLayout extends Component {
  constructor() {
    super(props);
  }

  render() {
    return (
      <div className="main-layout">
        {this.props.children}
      </div>
    );
  }
}

MainLayout.propTypes = {
  children: PropTypes.element.isRequired
};

export default MainLayout;
