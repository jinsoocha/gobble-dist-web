import { connect } from 'react-redux';
import Comments from './Comments';

import { getComments } from './commentsAction';

const mapStateToProps = (state, ownProps) => {
  try {
    return { comments: state.comment[ownProps.postId] };
  } catch (e) {
    return { comments: [] };
  }
};

const mapDispatchToProps = dispatch => ({
  getComments: parentId => dispatch(getComments(parentId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
