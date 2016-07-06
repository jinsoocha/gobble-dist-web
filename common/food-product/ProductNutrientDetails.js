import React, { PropTypes } from 'react';

const ProductNutrientDetails = (props) => {
  const { nutrient, nutrientLevel, comparedLevel } = props;
  // FUTURE REFERENCE: comparedLevel can be undefined
  return (
    <p>{nutrient}{nutrientLevel} compare with: {comparedLevel}</p>
  );
};

ProductNutrientDetails.propTypes = {
  nutrient: PropTypes.string.isRequired,
  nutrientLevel: PropTypes.number.isRequired,
  comparedLevel: PropTypes.number.isRequired,
};

export default ProductNutrientDetails;
