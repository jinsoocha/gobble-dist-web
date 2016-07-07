import React, { PropTypes } from 'react';
import moment from 'moment';

const ReviewResult = (props) => (
  <div className="review-result">
    <div className="review-date-rating-link">
      Posted: <span className="review-result-value">{moment(props.review.Post_created_at, moment.ISO_8601).fromNow()}</span>
      &nbsp;&nbsp;
      Rating: <span className="review-result-value">{props.review.rating} stars</span>
      &nbsp;&nbsp;
      <a href={`/food/${props.review.Product_upc.toString()}`}>See Product</a>
    </div>
    <div className="review-result-comment">{`"${props.review.comment.slice(0, 30)} ... "`}</div>
  </div>
);

const ReviewResults = (props) => {
  if (props.reviewResults.length > 0) {
    return (
      <div className="search-results review-results">
        <h3 className="search-results-title">Reviews</h3>
        {props.reviewResults.map(review =>
          <ReviewResult
            key={review.postId}
            review={review}
          />
        )}
      </div>
    );
  } else {
    return (
      <div className="search-results review-results">
        <h3 className="search-results-title">Reviews</h3>
        <span className="no-results">No reviews found.</span>
      </div>
    );
  }
};

ReviewResults.propTypes = {
  reviewResults: PropTypes.array.isRequired
};

export default ReviewResults;
