import { default as React, Component, PropTypes } from 'react';
// import { default as update } from 'react-addons-update';
import { connect } from 'react-redux';

import { default as canUseDOM } from 'can-use-dom';
import { default as _ } from 'lodash';

import { GoogleMapLoader, GoogleMap, Marker } from 'react-google-maps';
import { triggerEvent } from 'react-google-maps/lib/utils';

import config from './../../../env/client.js';

class RippleMap extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      markers: [],
      facebookId: this.props.facebookId,
      defaultLat: 37.7838159,
      defaultLng: -122.4090234,
    };
    this.handleWindowResize = _.throttle(this.handleWindowResize.bind(this), 500);
  }

  componentDidMount() {
    const facebookId = this.state.facebookId;
    if (!canUseDOM) {
      return;
    }
    window.addEventListener('resize', this.handleWindowResize);
    window.socket = io(config.GOBBLE_RIPPLE_URL);
    window.socket.on('new ripple', (message) => {
      const ripple = JSON.parse(message);
      const newState = JSON.parse(JSON.stringify(this.state.markers));
      newState.push({ position: { lat: ripple.lat, lng: ripple.lng }, key: Date.now(), defaultAnimation: 2 });
      this.setState({ markers: newState });
    });
    window.socket.updateLocation = function updateLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;
          window.socket.emit('update location', facebookId, lat, lng);
        });
      }
    };
    window.socket.updateShape = function updateShape() {
      window.socket.emit('update shape', facebookId, 'large-square');
    };
    window.socket.updateShape('large square');
    window.socket.updateLocation();
    setInterval(window.socket.updateLocation, 10000);
  }

  componentWillUnmount() {
    if (!canUseDOM) {
      return;
    }
    window.removeEventListener('resize', this.handleWindowResize);
  }

  handleWindowResize() {
    console.log('handleWindowResize', this._googleMapComponent);
    triggerEvent(this._googleMapComponent, 'resize');
  }

  render() {
    return (
      <GoogleMapLoader
        containerElement={(
          <div
            style={{
              height: '100%',
              width: '90%',
              marginLeft: '30px',
            }}
          />
        )}
        googleMapElement={(
          <GoogleMap
            ref={(map) => (this._googleMapComponent = map)}
            defaultZoom={12}
            defaultCenter={{ lat: this.state.defaultLat, lng: this.state.defaultLng }}
          >
            {this.state.markers.map((marker) => {
              return (
                <Marker
                  {...marker}
                />
              );
            })}
          </GoogleMap>
        )}
      />
    );
  }
}

RippleMap.propTypes = {
  facebookId: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  facebookId: state.layout.navBarUser.facebookId.toString()
});

export default connect(mapStateToProps)(RippleMap);
