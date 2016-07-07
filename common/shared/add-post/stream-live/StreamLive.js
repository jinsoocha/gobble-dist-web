import React, { PropTypes, Component } from 'react';
import { PEERJS_KEY } from './../../../../env/client.js';

const StartLiveButton = (props) => (
  <button
    onClick={props.startLiveStream}
    className="pure-button pure-button-primary button-xlarge button-success start-live"
  >
    Go live!
  </button>
);

const EndLiveButton = (props) => (
  <button
    onClick={props.endLiveStream}
    className="pure-button pure-button-primary button-xlarge button-success end-live"
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
      instructions: 'Live Stream',
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

    if (this.state.description === '') {
      this.setState({ description: `Jack Zhang's Gobble Live Stream.` });
    }
  }

  endLiveStream() {
    streamingPeer.destroy();
    outgoingStream.getTracks()[0].stop();
    this.setState({
      instructions: 'Live Stream',
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
        width: 370,
        height: 330
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
        instructions: "You're live!",
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
        <h2>{this.state.instructions}</h2>
        <video
          className="video outgoing-stream"
          poster="http://dummyimage.com/370X330/000000/dadcfa.png&text=Click below to go live!"
        />
        <div className="stream-live-description-label">Live Stream Description</div>
        <textarea
          className="stream-live-description"
          type="text"
          placeholder="What are you gobbling on? Give your followers a description!"
          value={this.state.description}
          onChange={(e) => {
            this.setState({ description: e.target.value });
          }}
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

StreamLive.propTypes = {

};

export default StreamLive;

