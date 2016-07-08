import React, { PropTypes } from 'react';

const LiveListEntry = (props) => {
  return (
    <div className="live-list-entry">
      Live List Entry
    </div>
  );
};

const LiveList = (props) => (
  <div className="live-list">
    {props.filteredLiveList.map(liveListEntry =>
      <LiveListEntry
        key={liveListEntry.peer_id}
        live={liveListEntry}
      />
    )}
  </div>
);

LiveList.propTypes = {
  filteredLiveList: PropTypes.array.isRequired,
};

export default LiveList;
