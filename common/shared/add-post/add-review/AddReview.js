import React, { Component } from 'react';
import BarCodeScanner from './BarCodeScanner';
import Rating from './Rating';
import FileUpload from './FileUpload';

class AddReview extends Component {
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
  }

  render() {
    return (
      <div className="add-review">
        <h2>Review A Product</h2>
        <p>1. Scan a product barcode.</p>
        <BarCodeScanner handleBarcodeChange={this.handleBarcodeChange} />
        <span className="upc-state">{this.state.upc}</span>
        <p>2. Give a rating, from 1 to 5.</p>
        <Rating handleRatingChange={this.handleRatingChange} />
        <p>3. Write your review!</p>
        <textarea
          type="text"
          placeholder="How'd it go?"
          value={this.review}
          onChange={this.handleReviewChange}
        />
        <p>4. Upload images (Optional)</p>
        <FileUpload />
        <button
          onClick={this.handleSubmitPost}
          className="pure-button pure-button-primary button-xlarge button-success"
        >
          Post your review!
        </button>
      </div>
    );
  }
}

export default AddReview;
