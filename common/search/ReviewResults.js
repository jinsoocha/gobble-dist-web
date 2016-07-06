import React, { PropTypes } from 'react';

const ReviewResult = (props) => (
  <div className="review-result">
    review result
  </div>
);

const ReviewResults = (props) => (
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

ReviewResults.propTypes = {
  reviewResults: PropTypes.array.isRequired
};

export default ReviewResults;
