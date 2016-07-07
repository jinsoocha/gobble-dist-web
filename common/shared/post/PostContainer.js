import { connect } from 'react-redux';
import Posts from './Posts';

import { getPostsByDate, getPostsByFriends, getPostsByRipple, getPostsByUserId } from './postAction';

const mapStateToProps = state => ({

  posts: state.post.posts,
  facebookId: state.post.facebookId

});

const mapDispatchToProps = dispatch => ({
  getPostsByDate: date => dispatch(getPostsByDate(date)),
  getPostsByFriends: (facebookId, date) => dispatch(getPostsByFriends(facebookId, date)),
  getPostsByRipple: userId => dispatch(getPostsByRipple(userId)),
  getPostsByUserId: userId => dispatch(getPostsByUserId(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
