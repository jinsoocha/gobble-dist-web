import React, { Component, PropTypes } from 'react';

class IncomingStream extends Component {
  constructor(props) {
    super(props);
    this.state = { duration: 'N/A', relativeStartTime: 'N/A' };
  }

  componentWillUnmount() {
    this.setState({ duration: 'N/A', relativeStartTime: 'N/A' });
    this.props.resetIncomingStream();
  }

  render() {
    const { currentlyWatching, description } = this.props;
    return (
      <div className="incoming-stream">
        <video
          className="video incoming-stream-video"
          poster="http://dummyimage.com/370X330/000000/dadcfa.png&text=Choose a live stream to watch below."
        />
        <div className="incoming-stream-info">
          <div className="incoming-stream-name">Currently watching: {currentlyWatching}</div>
          <div className="incoming-stream-description">{description}</div>
          <div className="incoming-stream-duration">Duration: {this.state.duration}</div>
          <div className="incoming-stream-start-time">Started {this.state.relativeStartTime}</div>
        </div>
      </div>
    );
  }
}

IncomingStream.propTypes = {
  incomingPeerId: PropTypes.string.isRequired,
  currentlyWatching: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  startTime: PropTypes.string.isRequired,
  resetIncomingStream: PropTypes.func.isRequired
};

export default IncomingStream;
