import React, { PropTypes } from 'react';

const Wish = props => (
  <div className="wish">
    <p>{`${props.first_name} wishes for ${props.name}`}</p>
    <p>{`${props.likes_cache} LIKES`}</p>
  </div>
);

Wish.propTypes = {
  first_name: PropTypes.string.isRequired,
  last_name: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  Product_upc: PropTypes.number.isRequired,
  likes_cache: PropTypes.number.isRequired
};

export default Wish;
