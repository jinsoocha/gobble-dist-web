import React, { PropTypes } from 'react';

import Username from '../general/Username';
import SmallPhoto from '../general/SmallPhoto';

const ReviewProfile = props => (
  <div className="review-profile">
    <SmallPhoto photo_url={props.photo_url} />
    <Username facebook_id={props.facebook_id} first_name={props.first_name} last_name={props.last_name} />
  </div>
);

ReviewProfile.propTypes = {
  facebook_id: PropTypes.number.isRequired,
  first_name: PropTypes.string,
  last_name: PropTypes.string,
  photo_url: PropTypes.string,
};

export default ReviewProfile;
