import React, { PropTypes } from 'react';

const ProductResult = (props) => (
  <div className="product-result">
    
  </div>
);

const ProductResults = (props) => (
  <div className="search-results review-results">
    <h3 className="search-results-title">Products</h3>
    {props.productResults.map(product =>
      <ProductResult
        key={product.upc}
        product={product}
      />
    )}
  </div>
);

ProductResults.propTypes = {
  productResults: PropTypes.array.isRequired
};

export default ProductResults;
