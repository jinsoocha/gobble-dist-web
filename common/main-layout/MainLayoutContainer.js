import { connect } from 'react-redux';

import { fetchUserIsAuth } from './LayoutActions';
import MainLayout from './MainLayout';

const mapStateToProps = state => {
  return {
    userIsAuth: state.userIsAuth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUserIsAuth: () => dispatch(fetchUserIsAuth)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainLayout);
