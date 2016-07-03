import React, { PropTypes } from 'react';

const Star = props => {
  if (props.filled) {
    return <i className="fa fa-star" />;
  }
  return <i className="fa fa-star-o" />;
};

Star.propTypes = {
  filled: PropTypes.bool.isRequired
};

export default Star;
