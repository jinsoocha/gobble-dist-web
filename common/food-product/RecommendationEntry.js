import React, { PropTypes } from 'react';

const RecommendationEntry = (props) => {
  const { product } = props;
  return (
    <h3>{product.name}</h3>
  );
};

RecommendationEntry.propTypes = {
  product: PropTypes.object.isRequired
};

export default RecommendationEntry;
