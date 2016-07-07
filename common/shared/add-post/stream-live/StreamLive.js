import React, { Component, PropTypes } from 'react';

import { PEERJS_KEY } from './../../../../env/client.js';

class StreamLive extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="stream-live">
        Live Stream here!
      </div>
    );
  }
}

export default StreamLive;

