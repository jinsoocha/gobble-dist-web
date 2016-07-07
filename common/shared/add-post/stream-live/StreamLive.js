import React, { Component } from 'react';
import { PEERJS_KEY } from './../../../../env/client.js';

const StartLiveButton = (props) => (
  <button
    onClick={props.startLiveStream}
    className="pure-button pure-button-primary button-xlarge button-success"
  >
    Go live!
  </button>
);

const EndLiveButton = (props) => (
  <button
    onClick={props.endLiveStream}
    className="pure-button pure-button-primary button-xlarge button-success"
  >
    Stop streaming
  </button>
);

class StreamLive extends Component {
  constructor(props) {
    super(props);
    this.startLiveStream = this.startLiveStream.bind(this);
    this.endLiveStream = this.endLiveStream.bind(this);

    this.state = {
      active: false,
      peerId: '',
      description: ''
    };
  }

  componentWillUnmount() {
    if (this.state.active) {
      this.endLiveStream();
    }
  }

  startLiveStream() {
    this._startUserMedia();
    this._startPeer();
  }

  endLiveStream() {
    streamingPeer.destroy();
    outgoingStream.getTracks()[0].stop();
    this.setState({
      active: false,
      peerId: '',
      description: ''
    });
  }

  _startUserMedia() {
    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
    if (!navigator.getUserMedia) console.error('navigator.getUserMedia not supported');

    const constraints = {
      audio: false,
      video: {
        width: 400
      }
    };

    const successCb = outgoingStream => {
      window.outgoingStream = outgoingStream;
      window.video = document.querySelector('.outgoing-stream');
      video.src = window.URL.createObjectURL(outgoingStream);
      video.onloadedmetadata = () => {
        video.play();
      };
    };

    const errorCb = err => {
      console.error(err);
    };

    navigator.getUserMedia(constraints, successCb, errorCb);
  }

  _startPeer() {
    const peerConfig = {
      key: PEERJS_KEY,
      debug: 3
    };

    window.streamingPeer = new Peer(peerConfig);

    streamingPeer.on('open', peerId => {
      this.setState({
        peerId,
        active: true
      });
      console.log(this.state);
      console.log(`My streamingPeer ID is: ${peerId}`);
    });

    streamingPeer.on('close', () => {
      this.setState({ active: false });
    });

    streamingPeer.on('error', err => {
      console.error(err);
    });
  }

  render() {
    return (
      <div className="stream-live">
        <h3>Live Stream</h3>
        <video
          className="video outgoing-stream"
          poster="http://dummyimage.com/400X320/000000/dadcfa.png&text=Click below to go live!"
        />
        <div className="stream-live-button-wrapper">
          {this.state.active ?
            <EndLiveButton endLiveStream={this.endLiveStream} /> :
            <StartLiveButton startLiveStream={this.startLiveStream} />
          }
        </div>
      </div>
    );
  }
}

export default StreamLive;

