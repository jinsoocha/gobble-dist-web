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
    .catch((err) => console.log('Analysis and recommendation is not ready: ', err))
    .then((data) => {
      this.props.getProductAnalysis(data);
      this.props.getCategoryComparison(
        Object.keys(data)[0] !== 'basicInfo' ?
        Object.keys(data)[0] :
        Object.keys(data)[1]
      );
    })
    .catch((err) => console.log(err));
  }

  render() {
    const name = Object.keys(this.props.productAnalysis).length === 0 ? null :
      <h1>{this.props.productAnalysis.basicInfo.name}</h1>;
    const image = Object.keys(this.props.productAnalysis).length === 0 ? null :
      <img
        role="presentation"
        src={this.props.productAnalysis.basicInfo.image}
        width="300"
        height="300"
        style={{ marginBottom: 30 }}
      />;
    return (
      <MainLayoutContainer>
        {name}
        {image}
        <FoodProductAnalysis
          upc={this.props.upc}
          productAnalysis={this.props.productAnalysis}
          getCategoryComparison={this.props.getCategoryComparison}
          categoryComparison={this.props.categoryComparison}
          showProductDetails={this.props.showProductDetails}
          selectedProduct={this.props.selectedProduct}
          getRandomRecommendations={this.props.getRandomRecommendations}
          recommendationsStorage={this.props.recommendationsStorage}
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
  selectedProduct: PropTypes.number.isRequired,
  getRandomRecommendations: PropTypes.func.isRequired,
  recommendationsStorage: PropTypes.object.isRequired,
};

export default FoodProduct;
