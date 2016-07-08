import React, { PropTypes } from 'react';

import IncomingStreamContainer from './IncomingStreamContainer';
import LiveOptionsContainer from './LiveOptionsContainer';

import LiveListContainer from './LiveListContainer';

const Live = (props) => {
  const { view, changeLiveListFilter } = props;

  let LiveView;
  if (view === 'active') {
    changeLiveListFilter('active');
    LiveView = LiveListContainer;
  } else if (view === 'ended') {
    changeLiveListFilter('ended');
    LiveView = LiveListContainer;
  } else if (view === 'global') {
    LiveView = () => (
      <h1>Global</h1>
    );
  } else { // view === 'all'
    changeLiveListFilter('all');
    LiveView = LiveListContainer;
  }

  return (
    <div className="live-view">
      <h1 className="live-title">
        <i className="fa fa-video-camera" aria-hidden="true"></i>
        Gobble Live
        <i className="fa fa-video-camera" aria-hidden="true"></i>
      </h1>
      <IncomingStreamContainer />
      <hr className="live-hr" />
      <LiveOptionsContainer />
      <LiveView />
    </div>
  );
};

Live.propTypes = {
  view: PropTypes.string.isRequired,
  changeLiveListFilter: PropTypes.func.isRequired
};

export default Live;
