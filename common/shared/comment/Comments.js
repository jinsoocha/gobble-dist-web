import React, { PropTypes, Component } from 'react';

import Comment from './Comment';
import AddComment from './AddCommentContainer';

class Comments extends Component {
  componentDidMount() {
    this.props.getComments(this.props.postId);
  }

  render() {
    return (
      <div className="comments">
        {Array.isArray(this.props.comments) ? this.props.comments.map(comment => <Comment key={comment.postId} {...comment} />) : null}
        <AddComment postId={this.props.postId} />
      </div>
    );
  }
}

Comments.propTypes = {
  comments: PropTypes.array,
  postId: PropTypes.number.isRequired
};

export default Comments;
