import { connect } from 'react-redux';
import Comments from './Comment';

import { getComments } from './commentsAction';

const mapStateToProps = (state, ownProps) => {
  try {
    return { comments: state.comment[ownProps.postId].comments };
  } catch (e) {
    return { comments: [] };
  }
};

const mapDispatchToProps = () => ({
  getComments: postId => getComments(postId)
});

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
