import React from 'react';
import IncomingStreamContainer from './IncomingStreamContainer';
import LiveOptionsContainer from './LiveOptionsContainer';

const Live = () => (
  <div className="live-view">
    <h1 className="live-title">
      <i className="fa fa-video-camera" aria-hidden="true"></i>
      Gobble Live
      <i className="fa fa-video-camera" aria-hidden="true"></i>
    </h1>
    <IncomingStreamContainer />
    <hr className="live-hr" />
    <LiveOptionsContainer />
  </div>
);

export default Live;
