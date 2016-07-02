import { connect } from 'react-redux';
import FoodProduct from './FoodProduct';
import { getProductAnalysis, getCategoryComparison, showProductDetails } from './FoodProductActions';

const mapStateToProps = state => ({
  upc: state.foodProduct.upc,
  productAnalysis: state.foodProduct.productAnalysis,
  categoryComparison: state.foodProduct.categoryComparison,
  productDetails: state.foodProduct.productDetails
});

const mapDispatchToProps = dispatch => ({
  getProductAnalysis: (productAnalysis) => {
    dispatch(getProductAnalysis(productAnalysis));
  },
  getCategoryComparison: (categoryComparison) => {
    dispatch(getCategoryComparison(categoryComparison));
  },
  showProductDetails: (productDetails) => {
    dispatch(showProductDetails(productDetails));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(FoodProduct);
