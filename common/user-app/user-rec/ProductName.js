import React, { PropTypes } from 'react';

const ProductName = props => (
  <div className="product-name">
    <a href={`/food/${props.upc}`}>{props.name}</a>
  </div>
);

ProductName.propTypes = {
  upc: PropTypes.number,
  name: PropTypes.name
};

export default ProductName;
