import { connect } from 'react-redux';
import FoodProduct from './FoodProduct';
import { getProductAnalysis } from './FoodProductActions';

const mapStateToProps = state => ({
  upc: state.foodProduct.upc,
  productAnalysis: state.foodProduct.productAnalysis
});

const mapDispatchToProps = dispatch => ({
  getProductAnalysis: (productAnalysis) => {
    dispatch(getProductAnalysis(productAnalysis));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(FoodProduct);
