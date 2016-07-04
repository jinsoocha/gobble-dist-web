import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

import FileUpload from './FileUpload.js';
import Rating from './Rating.js';
import BarcodeReader from './BarcodeReader.js';

import fetch from 'isomorphic-fetch';

import config from '../../../env/client.js';


class AddPost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      upc: 'Scanning..',
      rating: 5,
      review: '',
      media: []
    };

    this.handleRatingChange = this.handleRatingChange.bind(this);
    this.handleReviewChange = this.handleReviewChange.bind(this);
    this.handleMediaChange = this.handleMediaChange.bind(this);
    this.handleSubmitPost = this.handleSubmitPost.bind(this);
    this.handleBarcodeChange = this.handleBarcodeChange.bind(this);
  }

  handleBarcodeChange(upc) {
    this.setState({ upc });
  }

  handleReviewChange(event) {
    this.setState({ review: event.target.value });
  }

  handleRatingChange(rating) {
    this.setState({ rating });
  }

  handleMediaChange(fileName) {
    const newMedia = this.state.media;
    newMedia.push(fileName);
    this.setState({ media: newMedia });
  }

  handleSubmitPost() {
    if (isNaN(this.state.upc)) {
      return;
    }

    console.log('facebookId', this.props.facebookId);
    console.log('upc: ', this.state.upc);
    console.log('rating: ', this.state.rating);
    console.log('review: ', this.state.review);
    console.log('media: ', this.state.media);

    fetch(`${config.GOBBLE_API_URL}/review`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        facebookId: Number(this.props.facebookId),
        upc: Number(this.state.upc),
        rating: this.state.rating,
        review: this.state.review,
        media: this.state.media
      })
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.err(err);
    });
  }

  render() {
    return (
      <div>
        <BarcodeReader handleBarcodeChange={this.handleBarcodeChange} />
        <p> UPC: {this.state.upc} </p>
        <Rating handleRatingChange={this.handleRatingChange} />
        <textarea
          type="text"
          placeholder="Your review"
          value={this.review}
          onChange={this.handleReviewChange}
        />
        <FileUpload handleFile={this.handleMediaChange} />
        <button
          onClick={this.handleSubmitPost}
          className="pure-button pure-button-primary button-xlarge button-success"
        >Post</button>
      </div>
    );
  }
}

AddPost.propTypes = {
  facebookId: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  facebookId: state.layout.navBarUser.facebookId.toString()
});

export default connect(mapStateToProps)(AddPost);
