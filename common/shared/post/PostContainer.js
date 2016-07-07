import { connect } from 'react-redux';
import Posts from './Posts';

import { getPostsByDate, getPostsByFriends, getPostsByRipple } from './postAction';

const mapStateToProps = state => ({

  posts: state.post.posts,
  facebookId: state.post.facebookId

});

const mapDispatchToProps = dispatch => ({
  getPostsByDate: date => dispatch(getPostsByDate(date)),
  getPostsByFriends: (facebookId, date) => dispatch(getPostsByFriends(facebookId, date)),
  getPostsByRipple: userId => dispatch(getPostsByRipple(userId))
});


export default connect(mapStateToProps, mapDispatchToProps)(Posts);
