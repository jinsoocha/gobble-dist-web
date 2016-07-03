import React from 'react';

const Postbit = props => (

  <div className="post"></div>



);

Posbit.propTypes = {
  upc: PropTypes.number.isRequired,
  facebook_id: PropTypes.number,
  first_name: PropTypes.string.isRequired,
  last_name: PropTypes.string.isRequired,
  display_name: PropTypes.string,
  gender: PropTypes.string,
  photo_url: PropTypes.string
};
