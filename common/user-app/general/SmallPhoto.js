import React, { PropTypes } from 'react';

const SmallPhoto = props => (
  <div className="small-photo">
    <img src={props.photo_url} style={{ maxWidth: props.size || '50px', maxHeight: props.size || '50px' }} alt="user" />
  </div>
);

SmallPhoto.propTypes = {
  photo_url: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired
};

export default SmallPhoto;
