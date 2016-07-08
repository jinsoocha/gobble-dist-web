import { connect } from 'react-redux';
import StreamLive from './StreamLive';

const mapStateToProps = state => ({
  userFirstName: state.layout.navBarUser.firstName,
  userFacebookId: state.layout.navBarUser.facebookId.toString()
});

export default connect(
  mapStateToProps
)(StreamLive);
