import React, { PropTypes } from 'react';
import NutrientEntry from './NutrientEntry';
import RecommendationEntry from './RecommendationEntry';

const AnalysisEntry = (props) => {
  const { category, data, showProductDetails, selectedProduct } = props;
  return (
    <div>
      {!data.BadNutrients ? null :
      Object.keys(data.BadNutrients).map((nutrient) =>
        <NutrientEntry
          key={nutrient}
          category={category}
          nutrient={nutrient}
          data={data.BadNutrients[nutrient]}
          quality="bad"
        />)}
      {!data.GoodNutrients ? null :
      Object.keys(data.GoodNutrients).map((nutrient) =>
        <NutrientEntry
          key={nutrient}
          category={category}
          nutrient={nutrient}
          data={data.GoodNutrients[nutrient]}
          quality="good"
        />)}
      {!data.nutrientsWithoutRecommendation ? null :
      Object.keys(data.nutrientsWithoutRecommendation).map((nutrient) =>
        <NutrientEntry
          key={nutrient}
          category={category}
          nutrient={nutrient}
          data={data.nutrientsWithoutRecommendation[nutrient]}
          quality="neutral"
        />)}
      {Object.keys(data).map((nutrients) => {
        return Object.keys(data[nutrients]).map((nutrient) => {
          return !data[nutrients][nutrient].recommendedProducts ? null :
          data[nutrients][nutrient].recommendedProducts.map((product) =>
            <RecommendationEntry
              quality={nutrients}
              nutrient={nutrient}
              product={product}
              showProductDetails={showProductDetails}
              selectedProduct={selectedProduct}
            />);
        });
      })}
    </div>
  );
};

AnalysisEntry.propTypes = {
  category: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
  showProductDetails: PropTypes.func.isRequired,
  selectedProduct: PropTypes.number.isRequired
};

export default AnalysisEntry;
