import { connect } from 'react-redux';
import UserResults from './UserResults';

const mapStateToProps = state => ({
  userResults: state.search.results.users
});

export default connect(mapStateToProps)(UserResults);
