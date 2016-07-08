import React, { Component, PropTypes } from 'react';
import moment from 'moment';

class IncomingStream extends Component {
  constructor(props) {
    super(props);

    this.startIncomingStream = this.startIncomingStream.bind(this);
    this.state = {
      relativeStartTime: 'N/A',
      currentlyWatching: 'N/A'
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.incomingPeerId !== '') {
      this.setState({
        currentlyWatching: nextProps.currentlyWatching.display_name,
        relativeStartTime: moment(nextProps.startTime, moment.ISO_8601).fromNow()
      });

      this.startIncomingStream(nextProps.incomingPeerId);
    }
  }

  componentWillUnmount() {
    this.setState({ duration: 'N/A', relativeStartTime: 'N/A' });
    this.props.resetIncomingStream();
  }

  startIncomingStream(peerId) {
    console.log(peerId);
  }

  render() {
    const { description } = this.props;
    const { currentlyWatching, relativeStartTime } = this.state;
    return (
      <div className="incoming-stream">
        <video
          className="video incoming-stream-video"
          poster="http://dummyimage.com/370X330/000000/dadcfa.png&text=Choose a live stream to watch below."
        />
        <div className="incoming-stream-info">
          <div className="incoming-stream-name">
            Currently watching:&nbsp;
            <span className="stream-name-value">{currentlyWatching}</span>
          </div>
          <div className="incoming-stream-description">{description}</div>
          <div className="incoming-stream-start-time">
            Started:&nbsp;
            <span className="stream-start-time-value">{relativeStartTime}</span>
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
