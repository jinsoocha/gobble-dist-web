import React, { PropTypes } from 'react';

const Username = props => (
  <p>
    <a href={`/${props.facebook_id}`}>{`${props.first_name} ${props.last_name}`}</a>
  </p>
);

export default Username;

Username.propTypes = {
  facebook_id: PropTypes.number.isRequired,
  first_name: PropTypes.string.isRequired,
  last_name: PropTypes.string.isRequired
};
