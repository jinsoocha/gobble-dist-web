import { connect } from 'react-redux';

import PostTypeBar from './PostTypeBar';
import { changePostType } from './AddPostActions';

const mapDispatchToProps = dispatch => ({
  changePostType: (postType) => {
    dispatch(changePostType(postType));
  }
});

export default connect(() => ({}), mapDispatchToProps)(PostTypeBar);
