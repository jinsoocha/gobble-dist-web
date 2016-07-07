import React, { PropTypes } from 'react';

import ProductName from './ProductName';
import ProductImage from './ProductImage';

const Recommendation = props => (
  <div className="recommendation">
    <ProductName upc={props.upc} name={props.name} />
    <ProductImage image={props.image} />
  </div>
);

Recommendation.propTypes = {
  upc: PropTypes.number,
  name: PropTypes.string,
  image: PropTypes.string
};
