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
    const { quality, nutrient, product, selectedProduct } = this.props;
    return (
      <div>
        <h3 onClick={this.showProductDetails}>{product.name}</h3>
        {selectedProduct === product.UPC ?
          (<div>
            <div>
              <p>Name: {product.name}</p>
              <p>Brand: {product.brand}</p>
              <p>Barcode: {product.UPC}</p>
              <p>Recommendation for: {quality} {nutrient}</p>
            </div>
            {Object.keys(product).map((key) => {
              return (key !== 'name' && key !== 'brand' && key !== 'UPC') ?
                (<ProductNutrientDetails
                  key={key}
                  nutrient={key}
                  nutrientLevel={product[key]}
                />)
              : null;
            })}
          </div>)
          : null}
      </div>
    );
  }
}

RecommendationEntry.propTypes = {
  product: PropTypes.object.isRequired,
  showProductDetails: PropTypes.func.isRequired,
  selectedProduct: PropTypes.number.isRequired,
  quality: PropTypes.string.isRequired,
  nutrient: PropTypes.string.isRequired
};

export default RecommendationEntry;
