import React, { PropTypes, Component } from 'react';
import AnalysisEntry from './AnalysisEntry';
import CategorySelection from './CategorySelection';

class FoodProductAnalysis extends Component {
  constructor(props) {
    super(props);
    this.getCategoryComparison = this.getCategoryComparison.bind(this);
  }

  getCategoryComparison(e) {
    this.props.getCategoryComparison(e.target.value);
  }

  render() {
    const { productAnalysis, categoryComparison, showProductDetails, selectedProduct, getRandomRecommendations, recommendationsStorage } = this.props;
    return (
      <div>
        {Object.keys(productAnalysis).length > 0 ?
        (<div>Compare with the category:{' '}
          <select
            defaultValue={
              Object.keys(productAnalysis)[Object.keys(productAnalysis).length - 1] !== 'basicInfo' ?
              Object.keys(productAnalysis)[Object.keys(productAnalysis).length - 1] :
              Object.keys(productAnalysis)[Object.keys(productAnalysis).length - 2]
            }
            onChange={this.getCategoryComparison}
          >
          {Object.keys(productAnalysis).map((category, i) => {
            return category === 'basicInfo' ? null :
              <CategorySelection
                key={i}
                category={category}
              />;
          })}
          </select>
          {!categoryComparison ? null :
          (<AnalysisEntry
            key={categoryComparison}
            basicInfo={productAnalysis.basicInfo}
            category={categoryComparison}
            data={productAnalysis[categoryComparison]}
            showProductDetails={showProductDetails}
            selectedProduct={selectedProduct}
            getRandomRecommendations={getRandomRecommendations}
            recommendationsStorage={recommendationsStorage}
          />)}
        </div>)
        : (<h3>Please return later for the analysis and recommendation!</h3>)}
      </div>
    );
  }
}

FoodProductAnalysis.propTypes = {
  upc: PropTypes.string.isRequired,
  productAnalysis: PropTypes.object.isRequired,
  getCategoryComparison: PropTypes.func.isRequired,
  categoryComparison: PropTypes.string.isRequired,
  showProductDetails: PropTypes.func.isRequired,
  selectedProduct: PropTypes.number.isRequired,
  getRandomRecommendations: PropTypes.func.isRequired,
  recommendationsStorage: PropTypes.object.isRequired
};

export default FoodProductAnalysis;
