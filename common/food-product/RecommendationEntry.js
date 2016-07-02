import React, { Component, PropTypes } from 'react';
import ProductNutrientDetails from './ProductNutrientDetails';

class RecommendationEntry extends Component {
  constructor(props) {
    super(props);
    this.showProductDetails = this.showProductDetails.bind(this);
  }

  showProductDetails(e) {
    e.preventDefault();
    this.props.showProductDetails(this.props.product);
  }

  render() {
    const { product, productDetails } = this.props;
    let basicDetails;
    if (Object.keys(productDetails).length > 0 && productDetails.UPC === product.UPC) {
      basicDetails =
      (<div>
        <p>Name: {productDetails.name}</p>
        <p>Brand: {productDetails.brand}</p>
        <p>Barcode: {productDetails.UPC}</p>
      </div>);
    }
    return (
      <div>
        <h3 onClick={this.showProductDetails}>{product.name}</h3>
        {basicDetails}
        {productDetails.UPC !== product.UPC ? null :
          Object.keys(productDetails).map((key) => {
            if (key !== 'name' && key !== 'brand' && key !== 'UPC') {
              return (
                <ProductNutrientDetails
                  key={key}
                  nutrient={key}
                  nutrientLevel={productDetails[key]}
                />
              );
            }
          })}
      </div>
    );
  }
}

RecommendationEntry.propTypes = {
  product: PropTypes.object.isRequired,
  showProductDetails: PropTypes.func.isRequired,
  productDetails: PropTypes.object.isRequired
};

export default RecommendationEntry;
