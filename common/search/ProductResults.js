import React, { PropTypes } from 'react';

const ProductResult = () => (
  <div className="product-result">
    Product Information Here
  </div>
);

const ProductResults = (props) => {
  if (props.productResults.length > 0) {
    return (
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
  } else {
    return (
      <div className="search-results product-results">
        <h3 className="search-results-title">Products</h3>
        <span className="no-results">No products found.</span>
      </div>
    );
  }
};

ProductResults.propTypes = {
  productResults: PropTypes.array.isRequired
};

export default ProductResults;
