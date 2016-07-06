import { connect } from 'react-redux';
import ProductResults from './ProductResults';

const mapStateToProps = state => ({
  productResults: state.search.results.products
});

export default connect(mapStateToProps)(ProductResults);
