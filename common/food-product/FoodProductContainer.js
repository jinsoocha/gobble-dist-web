import { connect } from 'react-redux';
import FoodProduct from './FoodProduct';
import { getProductAnalysis, getCategoryComparison } from './FoodProductActions';

const mapStateToProps = state => ({
  upc: state.foodProduct.upc,
  productAnalysis: state.foodProduct.productAnalysis,
  categoryComparison: state.foodProduct.categoryComparison
});

const mapDispatchToProps = dispatch => ({
  getProductAnalysis: (productAnalysis) => {
    dispatch(getProductAnalysis(productAnalysis));
  },
  getCategoryComparison: (categoryComparison) => {
    dispatch(getCategoryComparison(categoryComparison));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(FoodProduct);
