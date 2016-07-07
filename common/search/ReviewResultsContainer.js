import { connect } from 'react-redux';
import ReviewResults from './ReviewResults';

const mapStateToProps = state => ({
  reviewResults: state.search.results.reviews
});

export default connect(mapStateToProps)(ReviewResults);
