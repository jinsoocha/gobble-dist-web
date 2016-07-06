import React, { Component, PropTypes } from 'react';

class Media extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className="media">
      </div>
    );
  }
}

Media.propTypes = {
  postId: PropTypes.number,
  media: PropTypes.array
};
