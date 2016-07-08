import React, { Component, PropTypes } from 'react';

class IncomingStream extends Component {
  constructor(props) {
    super(props);
    this.state = { duration: 'N/A', relativeStartTime: 'N/A' };
    this.startIncomingStream = this.startIncomingStream.bind(this);
  }

  componentDidMount() {
    if (this.props.incomingPeerId !== '') {
      this.startIncomingStream();
    }
  }

  componentWillUnmount() {
    this.setState({ duration: 'N/A', relativeStartTime: 'N/A' });
    this.props.resetIncomingStream();
  }

  startIncomingStream() {
    console.log('yay!');
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
          <div className="incoming-stream-name">
            Currently watching:&nbsp;
            <span className="stream-name-value">{currentlyWatching.display_name}</span>
          </div>
          <div className="incoming-stream-description">{description}</div>
          <div className="incoming-stream-duration">
            Duration:&nbsp;
            <span className="stream-duration-value">{this.state.duration}</span>
          </div>
          <div className="incoming-stream-start-time">
            Started&nbsp;
            <span className="stream-start-time-value">{this.state.relativeStartTime}</span>
          </div>
        </div>
      </div>
    );
  }
}

IncomingStream.propTypes = {
  incomingPeerId: PropTypes.string.isRequired,
  currentlyWatching: PropTypes.object.isRequired,
  description: PropTypes.string.isRequired,
  startTime: PropTypes.string.isRequired,
  resetIncomingStream: PropTypes.func.isRequired
};

export default IncomingStream;
