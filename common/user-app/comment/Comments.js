import React, { PropTypes, Component } from 'react';

import Comment from './Comment';

class Comments extends Component {
  componentDidMount() {
    this.props.getComments(this.props.postId);
  }

  render() {
    return (
      <div className="comments">
        {this.props.comments ? this.props.comments.map(comment => <Comment {...comment} />) : ''}
      </div>
    );
  }
}

Comments.propTypes = {
  comments: PropTypes.array,
  postId: PropTypes.number.isRequired
};

export default Comments;
