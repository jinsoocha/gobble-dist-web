import React, { PropTypes } from 'react';

const FoodProductAnalysis = (props) => {
  console.log(props.productAnalysis);
  return (
    <h1>Product analysis for {props.upc}</h1>
  );
};

FoodProductAnalysis.propTypes = {
  upc: PropTypes.string.isRequired,
  productAnalysis: PropTypes.object.isRequired
};

export default FoodProductAnalysis;
