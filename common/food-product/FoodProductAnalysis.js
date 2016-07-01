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
    const { productAnalysis, categoryComparison } = this.props;
    if (Object.keys(productAnalysis).length > 0) {
      let analysis;
      if (categoryComparison) {
        analysis =
          (<AnalysisEntry
            key={categoryComparison}
            category={categoryComparison}
            data={productAnalysis[categoryComparison]}
          />);
      }
      return (
        <div>Compare with the category:{' '}
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
        {analysis}
        </div>
      );
    } else {
      return (
        <h3>Please return later for the analysis and recommendation!</h3>
      );
    }
  }
}

FoodProductAnalysis.propTypes = {
  upc: PropTypes.string.isRequired,
  productAnalysis: PropTypes.object.isRequired,
  getCategoryComparison: PropTypes.func.isRequired,
  categoryComparison: PropTypes.string.isRequired
};

export default FoodProductAnalysis;
