import React, { PropTypes } from 'react';
import NutrientEntry from './NutrientEntry';
import RecommendationEntry from './RecommendationEntry';

const AnalysisEntry = (props) => {
  const { category, data, showProductDetails, productDetails } = props;
  return (
    <div>
      {Object.keys(data.BadNutrients).map((nutrient) =>
        <NutrientEntry
          key={nutrient}
          category={category}
          nutrient={nutrient}
          data={data.BadNutrients[nutrient]}
          quality="bad"
        />
      )}
      {Object.keys(data.GoodNutrients).map((nutrient) =>
        <NutrientEntry
          key={nutrient}
          category={category}
          nutrient={nutrient}
          data={data.GoodNutrients[nutrient]}
          quality="good"
        />
      )}
      {Object.keys(data).map((nutrients) => {
        return Object.keys(data[nutrients]).map((nutrient) => {
          return data[nutrients][nutrient].recommendedProducts.map((product) =>
            <RecommendationEntry
              product={product}
              showProductDetails={showProductDetails}
              productDetails={productDetails}
            />
          );
        });
      })}
    </div>
  );
};

AnalysisEntry.propTypes = {
  category: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
  showProductDetails: PropTypes.func.isRequired,
  productDetails: PropTypes.object.isRequired
};

export default AnalysisEntry;
