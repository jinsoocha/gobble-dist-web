import React, { PropTypes } from 'react';

const ProductResult = (props) => (
  <div className="product-result">
    <div className="product-energy-brand">
      Brand: <span className="product-result-value">{props.product.brand}</span>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      Calories: <span className="product-result-value">{props.product.energy}</span>
    </div>
    <div className="product-result-name">
      <a href={`/food/${props.product.upc}`}>{props.product.name}</a>
    </div>
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
