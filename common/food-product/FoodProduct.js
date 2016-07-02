import React, { PropTypes, Component } from 'react';
import fetch from 'isomorphic-fetch';
import MainLayoutContainer from './../main-layout/MainLayoutContainer';
import FoodProductAnalysis from './FoodProductAnalysis';

class FoodProduct extends Component {

  componentWillMount() {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    fetch('http://localhost:3000/api/getRecommendation', {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify({ upc: this.props.upc }),
      headers,
    })
    .then((res) => res.json())
    .catch(() => console.log('Analysis and recommendation is not ready.'))
    .then((data) => {
      this.props.getProductAnalysis(data);
      this.props.getCategoryComparison(Object.keys(data)[Object.keys(data).length - 1]);
    })
    .catch((err) => console.log(err));
  }

  render() {
    return (
      <MainLayoutContainer>
        <h1>Product {this.props.upc}</h1>
        <FoodProductAnalysis
          upc={this.props.upc}
          productAnalysis={this.props.productAnalysis}
          getCategoryComparison={this.props.getCategoryComparison}
          categoryComparison={this.props.categoryComparison}
          showProductDetails={this.props.showProductDetails}
          productDetails={this.props.productDetails}
        />
      </MainLayoutContainer>
    );
  }
}

FoodProduct.propTypes = {
  upc: PropTypes.string.isRequired,
  getProductAnalysis: PropTypes.func.isRequired,
  productAnalysis: PropTypes.object.isRequired,
  getCategoryComparison: PropTypes.func.isRequired,
  categoryComparison: PropTypes.string.isRequired,
  showProductDetails: PropTypes.func.isRequired,
  productDetails: PropTypes.object.isRequired
};

export default FoodProduct;
