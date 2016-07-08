import React, { PropTypes, Component } from 'react';

import { GOBBLE_MEDIA_URL } from '../../../env/client';
import Modal from 'react-modal';


const customStyles = {
  content: {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    // width                 : '500px',
    // height                : '500px'
  },
  overlay: {
    position          : 'fixed',
    top               : '15%',
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor   : 'rgba(255, 255, 255, 0.75)'
  }
};

class Medium extends Component {
  constructor(props) {
    super(props);
    // this.validUrl = this.validUrl.bind(this);
    // this.isImage = this.isImage.bind(this);
    this.renderContent = this.renderContent.bind(this);
    this.state = {
      modalIsOpen: false
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.renderContent = this.renderContent.bind(this);
  }
  validUrl() {
    if (this.props.urlCompressed) return this.props.urlCompressed;
    else return this.props.url;
  }
  openModal() {
    this.setState({ modalIsOpen: true });
  }
  closeModal() {
    this.setState({ modalIsOpen: false });
  }
  renderImage(path, onClick, width = this.props.width, height = this.props.height) {
    return (
      <img onClick={onClick} src={path} style={{ maxHeight: height || '100px', maxWidth: width || '100%' }} alt="content" />
    );
  }
  renderVideo(path, onClick, width = this.props.width, height = this.props.height) {
    return (
      <video onClick={onClick} style={{ width: width || '320px', height: height || '240px' }} controls>
        <source src={path} />
        Your browser does not support the video tag.
      </video>
    );
  }

  renderContent(onClick, height, width) {
    const url = this.validUrl();
    if (!url) return null;
    const path = this.props.urlCompressed ? `${GOBBLE_MEDIA_URL}/compressedImages/${this.props.urlCompressed}` : `${GOBBLE_MEDIA_URL}/images/${this.props.url}`;
    const isImage = url.match(/jpg$|jpeg$|png$/) !== null;
    if (isImage) {
      return this.renderImage(path, onClick, `${width ? `${width}px` : ''}`, `${height ? `${height}px` : ''}`);
    }
    return this.renderVideo(path, onClick, `${width ? `${width}px` : ''}`, `${~~(width * 0.75)}px`);
  }
  render() {
    return (
      <div className="medium">
        {this.renderContent(this.openModal)}
        <Modal
          style={customStyles}
          isOpen={this.state.modalIsOpen}
          dialogClassName="medium-modal"
        >
          <div onClick={this.closeModal} className="medium-close-modal">X</div>
          {this.renderContent(null, 500, 500)}
        </Modal>
      </div>
    );
  }
}

Medium.propTypes = {
  url: PropTypes.string,
  urlCompressed: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number
};

export default Medium;
