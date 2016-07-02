import React, { PropTypes } from 'react';
const d3 = require('d3');

const NutrientEntry = (props) => {
  const { category, nutrient, data, quality } = props;
  console.log(d3);
  return (
    <div>
      <h2>{quality}{nutrient}{data.ratio}{category}{data.product}/{data.category} out of {data.DV}</h2>
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
