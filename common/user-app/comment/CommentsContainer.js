import { connect } from 'react-redux';
import Comments from './Comment';

import { getComments } from './commentsAction';

const mapStateToProps = (state, ownProps) => ({
  comments: state[ownProps.postId].comments
});

const mapDispatchToProps = () => ({
  getComments
});

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
