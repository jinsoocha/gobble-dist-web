import React, { Component, PropTypes } from 'react';
import ProductNutrientDetails from './ProductNutrientDetails';

class RecommendationEntry extends Component {
  constructor(props) {
    super(props);
    this.showProductDetails = this.showProductDetails.bind(this);
  }

  showProductDetails(e) {
    e.preventDefault();
    this.props.showProductDetails(this.props.product.UPC);
  }

  render() {
    const { product, selectedProduct } = this.props;
    let basicDetails;
    if (selectedProduct === product.UPC) {
      basicDetails =
      (<div>
        <p>Name: {product.name}</p>
        <p>Brand: {product.brand}</p>
        <p>Barcode: {product.UPC}</p>
      </div>);
    }
    return (
      <div>
        <h3 onClick={this.showProductDetails}>{product.name}</h3>
        {basicDetails}
        {selectedProduct !== product.UPC ? null :
          Object.keys(product).map((key) => {
            if (key !== 'name' && key !== 'brand' && key !== 'UPC') {
              return (
                <ProductNutrientDetails
                  key={key}
                  nutrient={key}
                  nutrientLevel={product[key]}
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
  selectedProduct: PropTypes.number.isRequired
};

export default RecommendationEntry;
