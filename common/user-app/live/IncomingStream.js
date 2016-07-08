import React, { Component, PropTypes } from 'react';

class IncomingStream extends Component {
  render() {
    return (
      <div className="incoming-stream">
        <video
          className="video incoming-stream-video"
          poster="http://dummyimage.com/370X330/000000/dadcfa.png&text=Choose a live stream to watch below."
        />
        <div className="incoming-stream-info">
          <div className="incoming-stream-name">Currently watching: </div>
          <div className="incoming-stream-description">Description here yada yada</div>
          <div className="incoming-stream-duration">Duration: 10:23:23</div>
          <div className="incoming-stream-start-time">Started 4 hours ago</div>
        </div>
      </div>
    );
  }
}

IncomingStream.propTypes = {
  
};

export default IncomingStream;
