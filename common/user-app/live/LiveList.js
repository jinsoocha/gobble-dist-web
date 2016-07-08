import React, { PropTypes } from 'react';

const LiveList = (props) => (
  <div>LIVE LIST</div>
);

LiveList.propTypes = {
  filteredLiveList: PropTypes.array.isRequired,
};

export default LiveList;
