import React, { Component, PropTypes } from 'react';
import { PEERJS_KEY } from './../../../env/client';
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
    this._startUserMedia(() => {
      this._startPeer(() => {
        this._startCall(peerId);
      });
    });
  }

  _startPeer(callback) {
    const peerConfig = {
      key: PEERJS_KEY,
      debug: 3
    };

    window.receivingPeer = new Peer(peerConfig);

    receivingPeer.on('open', peerId => {
      console.log(`My receivingPeer ID is: ${peerId}`);
      callback();
    });

    receivingPeer.on('close', () => {
      console.log('Incoming stream peer connection closed.');
    });

    receivingPeer.on('error', err => {
      console.error(err);
    });
  }

  _startUserMedia(callback) {
    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
    if (!navigator.getUserMedia) console.error('navigator.getUserMedia not supported');

    const constraints = {
      audio: false,
      video: {
        width: 370,
        height: 330
      }
    };

    const successCb = mediaStream => {
      window.mediaStream = mediaStream;
      callback();
    };

    const errorCb = err => {
      console.error(err);
    };

    navigator.getUserMedia(constraints, successCb, errorCb);
  }


  _startCall(destPeerId) {
    const call = receivingPeer.call(destPeerId, mediaStream);
    call.on('stream', incomingStream => {
      console.log('Receiving stream');

      window.incomingStream = incomingStream;
      window.incomingVideo = document.querySelector('.incoming-stream-video');
      incomingVideo.src = window.URL.createObjectURL(incomingStream);
      incomingVideo.onloadedmetadata = () => {
        incomingVideo.play();
      };
    });
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
