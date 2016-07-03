import React from 'react';
import BarCodeScanner from './BarCodeScanner';

const AddReview = () => {
  return (
    <div className="add-review">
      <h2>Review A Product</h2>
      <p>1. Scan a product barcode.</p>
      <BarCodeScanner />
      <p>2. Give a rating, from 1 to 5.</p>
      <p>3. Write your review!</p>
      
    </div>
  );
};

export default AddReview;
