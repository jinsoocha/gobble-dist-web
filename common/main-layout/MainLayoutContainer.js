import { connect } from 'react-redux';

import MainLayout from './MainLayout';

const mapStateToProps = state => {
  return {
    userIsAuth: state.layout.isAuth
  };
};

export default connect(mapStateToProps)(MainLayout);
