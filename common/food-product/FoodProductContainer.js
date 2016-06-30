import { connect } from 'react-redux';
import FoodProduct from './FoodProduct';

const mapStateToProps = state => ({
  upc: state.foodProduct.upc
});

export default connect(mapStateToProps)(FoodProduct);
