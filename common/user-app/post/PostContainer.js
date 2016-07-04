import { connect } from 'react-redux';
import Posts from './Posts';

import { getPostsByDate, getPostsByFriend } from './postAction';

const mapStateToProps = state => ({

  posts: state.post.posts,
  facebookId: state.post.facebookId

});

const mapDispatchToProps = dispatch => ({
  getPostsByDate: date => dispatch(getPostsByDate(date)),
  getPostsByFriend: (facebookId, date) => dispatch(getPostsByFriend(facebookId, date))
});


export default connect(mapStateToProps, mapDispatchToProps)(Posts);
