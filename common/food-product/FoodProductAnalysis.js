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
    const { productAnalysis, categoryComparison, showProductDetails } = this.props;
    return (
      <div>
        {Object.keys(productAnalysis).length > 0 ?
        (<div>Compare with the category:{' '}
          <select
            defaultValue={Object.keys(productAnalysis)[Object.keys(productAnalysis).length - 1]}
            onChange={this.getCategoryComparison}
          >
          {Object.keys(productAnalysis).map((category, i) =>
            <CategorySelection
              key={i}
              category={category}
            />
          )}
          </select>
          {categoryComparison ?
          (<AnalysisEntry
            key={categoryComparison}
            category={categoryComparison}
            data={productAnalysis[categoryComparison]}
            showProductDetails={showProductDetails}
            selectedProduct={this.props.selectedProduct}
          />)
          : null}
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
  selectedProduct: PropTypes.number.isRequired
};

export default FoodProductAnalysis;
