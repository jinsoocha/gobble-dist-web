import React, { Component } from 'react';

class BarCodeScanner extends Component {
  componentDidMount() {
    this.startBarCodeScanner();
    this.state = {
      upc: ''
    };
  }

  componentWillUnmount() {
    Quagga.stop();
  }

  startBarCodeScanner() {
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
        console.error(err);
        return;
      }
      // console.log('Initialization finished. Ready to start');
      Quagga.start();

      Quagga.onDetected((data) => {
        const upc = data.codeResult.code;
        console.log('UPC detected', upc);
        Quagga.stop();
      });
    }));
  }

  render() {
    return (
      <div id="interactive" className="viewport">
        <video autoPlay="true" preload="auto" className="barcode-livestream" />
      </div>
    );
  }
}

export default BarCodeScanner;
