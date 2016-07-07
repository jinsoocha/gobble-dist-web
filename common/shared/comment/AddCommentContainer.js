import { connect } from 'react-redux';

import AddComment from './AddComment';
import { pushComment } from './commentsAction';

const mapStateToProps = state => ({
  facebookId: state.post.facebookId,
  first_name: state.post.firstName,
  last_name: state.post.lastName,
});

const mapDispatchToProps = dispatch => ({
  pushComment: (userId, parentId, comment, first_name, last_name) => dispatch(pushComment(userId, parentId, comment, first_name, last_name))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddComment);
