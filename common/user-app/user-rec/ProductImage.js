import React, { PropTypes } from 'react';

const ProductImage = props => (
  <div className="product-image">
    <img src={props.image} alt="product" />
  </div>
);

ProductImage.propTypes = {
  image: PropTypes.string
};

export default ProductImage;
