import React, { PropTypes } from 'react';

const NutrientEntry = (props) => {
  const { category, nutrient, data, quality } = props;
  return (
    <div>
      <h2>{quality}{nutrient}{data.ratio}{category}{data.product}/{data.category}</h2>
    </div>
  );
};

NutrientEntry.propTypes = {
  category: PropTypes.string.isRequired,
  nutrient: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
  quality: PropTypes.string.isRequired
};

export default NutrientEntry;
