import React, { PropTypes } from 'react';

const ReviewEntry = (props) => {
  const { review } = props;
  const stars = [];
  for (let i = 0; i < review.rating; i ++) {
    stars.push(<div key={i} className={'fa fa-star'} />);
  }
  return (
    <div style={{ display: 'flex', flexDirection: 'row', marginBottom: 30 }}>
      <img
        role="presentation"
        src={review.photo_url}
        width="100"
        height="100"
        style={{ marginRight: 30 }}
      />
      <div style={{ textAlign: 'left' }}>{stars}<br /><br /><strong>{review.display_name}</strong><br />{review.comment}</div>
    </div>
  );
};

ReviewEntry.propTypes = {
  review: PropTypes.object.isRequired,
};

export default ReviewEntry;
