import React, { PropTypes } from 'react';
import RecommendationEntry from './RecommendationEntry';

const NutrientEntry = (props) => {
  const { category, nutrient, data } = props;
  if (data.ratio > 1) {
    return (
      <div>
        <h2>High {nutrient} warning! {data.ratio * 100}% more sodium than the average {category} products!<br />Here are the low {nutrient} {category} products you can get.</h2>
        {data.recommendedProducts.map((product) =>
          <RecommendationEntry
            key={product.UPC}
            product={product}
          />
        )}
      </div>
    );
  } else {
    return (
      <div>
        <h2>{data.ratio * 100}% Lower {nutrient} than the average {category} products!<br />Need more {nutrient} in your {category} products? Here you go!</h2>
        {data.recommendedProducts.map((product) =>
          <RecommendationEntry
            key={product.UPC}
            product={product}
          />
        )}
      </div>
    );
  }
};

NutrientEntry.propTypes = {
  category: PropTypes.string.isRequired,
  nutrient: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired
};

export default NutrientEntry;
