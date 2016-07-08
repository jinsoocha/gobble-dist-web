import React, { PropTypes } from 'react';
import moment from 'moment';

const LiveListEntry = (props) => {
  return (
    <div className={`live-list-entry ${Boolean(props.live.active)}`}>
      <span className="list-entry-user">
        <a href={`/${props.live.user.facebook_id}`}>{props.live.user.display_name}</a>
      </span>
      <span className="list-entry-started">{moment(props.live.Live_created_at, moment.ISO_8601).format('MMMM Do, YYYY - h:mm a')}</span>
      <span className="list-entry-status">
        {!!props.live.active ?
          <span className="active">Watch Live <i className="fa fa-video-camera" aria-hidden="true"></i></span> :
          <span className="ended">Ended</span>
        }
      </span>
    </div>
  );
};

LiveListEntry.propTypes = {
  live: PropTypes.object.isRequired
};

const LiveList = (props) => {
  if (props.filteredLiveList.length === 0) {
    return (
      <div className="no-live-streams">None of the users you follow are currently live.</div>
    );
  } else {
    return (
      <div className="live-list">
        {props.filteredLiveList.map(liveListEntry =>
          <LiveListEntry
            key={liveListEntry.peer_id}
            live={liveListEntry}
          />
        )}
      </div>
    );
  }
};

LiveList.propTypes = {
  filteredLiveList: PropTypes.array.isRequired,
};

export default LiveList;
