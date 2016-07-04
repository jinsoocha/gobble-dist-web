import React, { Component } from 'react';

class FileUpload extends Component {
  componentDidMount() {
    const Dropzone = window.Dropzone;
    const dropzone = new Dropzone('#dropzone', { url: 'http://localhost:3003/api/media' });
    dropzone.on('success', (err, res) => {
      // console.log(`image name: ${res}`);
      this.props.handleFile(res);
    });
  }

  render() {
    return (
      <div>
        <div id="dropzone" className="dropzone"> </div>
      </div>
    );
  }
}

FileUpload.propTypes = {
  handleFile: React.PropTypes.func,
};

export default FileUpload;
