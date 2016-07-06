import { connect } from 'react-redux';
import ProfileViewOptions from './ProfileViewOptions';
import { changeProfileView } from './ProfileActions';

const mapDispatchToProps = dispatch => ({
  changeProfileView: view => {
    dispatch(changeProfileView(view));
  }
});

export default connect(
  () => ({}),
  mapDispatchToProps
)(ProfileViewOptions);
