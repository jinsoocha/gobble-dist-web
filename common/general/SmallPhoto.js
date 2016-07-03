import React, { PropTypes } from 'react';

const SmallPhoto = props => (
  <div className="small-photo">
    <img src={props.photo_url} style={{ maxWidth: '50px', maxHeight: '50px' }} alt="user" />
  </div>
);

SmallPhoto.propTypes = {
  photo_url: PropTypes.string.isRequired
};

export default SmallPhoto;
