import React, { PropTypes } from 'react';
import NutrientEntry from './NutrientEntry';

const AnalysisEntry = (props) => {
  const { category, data } = props;
  return (
    <div>
      {Object.keys(data.BadNutrients).map((nutrient) =>
        <NutrientEntry
          key={nutrient}
          category={category}
          nutrient={nutrient}
          data={data.BadNutrients[nutrient]}
        />
      )}
      {Object.keys(data.GoodNutrients).map((nutrient) =>
        <NutrientEntry
          key={nutrient}
          category={category}
          nutrient={nutrient}
          data={data.GoodNutrients[nutrient]}
        />
      )}
    </div>
  );
};

AnalysisEntry.propTypes = {
  category: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired
};

export default AnalysisEntry;
