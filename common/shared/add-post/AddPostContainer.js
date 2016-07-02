import { connect } from 'react-redux';

import AddPost from './AddPost';

const mapStateToProps = state => ({
  postType: state.addPost.postType
});

export default connect(mapStateToProps)(AddPost);
