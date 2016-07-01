import React, { PropTypes, Component } from 'react';
import FileUpload from './FileUpload.js';
import Rating from './Rating.js';
import BarcodeReader from './BarcodeReader.js';

// const Quagga = require('quagga').default;

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
    console.log('upc: ', this.state.upc);
    console.log('rating: ', this.state.rating);
    console.log('review: ', this.state.review);
    console.log('media: ', this.state.media);
    // request
    //   .post('/api/post')
    //   .type('form')
    //   .send({ upc: this.state.upc })
    //   .send({ rating: this.state.rating })
    //   .send({ review: this.state.review })
    //   .send({ media: JSON.stringify(this.state.media) })
    //   .end((err, res) => {
    //   });
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
};

export default AddPost;
