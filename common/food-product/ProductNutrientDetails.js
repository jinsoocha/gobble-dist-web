import React, { PropTypes } from 'react';

const ProductNutrientDetails = (props) => {
  const { nutrient, nutrientLevel } = props;
  return (
    <p>{nutrient}{nutrientLevel}</p>
  );
};

ProductNutrientDetails.propTypes = {
  nutrient: PropTypes.string.isRequired,
  nutrientLevel: PropTypes.string.isRequired
};

export default ProductNutrientDetails;
