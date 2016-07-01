import React, { Component } from 'react';

class BarcodeReader extends Component {
  constructor() {
    super();
    this.state = {

    };
  }
  componentDidMount() {
    this.startBarcodeScanner();
  }
  startBarcodeScanner() {
    Quagga.init({
      inputStream: {
        name: 'Live',
        type: 'LiveStream',
      },
      decoder: {
        readers: ['upc_reader']
      }
    }, ((err) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log('Initialization finished. Ready to start');
      Quagga.start();

      Quagga.onDetected((data) => {
        console.log('GOT ONE', data.codeResult.code);
        this.props.handleBarcodeChange(data.codeResult.code);
      });
    }));
  }

  render() {
    return (
      <div id="interactive" className="viewport">
        <video autoPlay="true" preload="auto" className="barcode-livestream">
        </video>
      </div>
    );
  }
}

BarcodeReader.propTypes = {
  handleBarcodeChange: React.PropTypes.func,
};

export default BarcodeReader;
