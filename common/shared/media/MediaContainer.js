import { connect } from 'react-redux';
import Media from './Media';

import { getMedia } from './mediaAction';

const mapStateToProps = (state, ownProps) => {
  try {
    return { media: state.media[ownProps.postId] };
  } catch (e) {
    return { media: [] };
  }
};

const mapDispatchToProps = dispatch => ({
  getMedia: postId => dispatch(getMedia(postId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Media);
