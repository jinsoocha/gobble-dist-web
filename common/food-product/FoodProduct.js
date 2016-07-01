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
    }).then((res) => res.json())
    .then((data) => this.props.getProductAnalysis(data));
  }

  render() {
    return (
      <MainLayoutContainer>
        <h1>Specific Food Product Page for {this.props.upc}</h1>
        <p>The product information populated into this page will be dynamic and dependent upon the url.</p>
        <FoodProductAnalysis upc={this.props.upc} productAnalysis={this.props.productAnalysis} />
      </MainLayoutContainer>
    );
  }
}

FoodProduct.propTypes = {
  upc: PropTypes.string.isRequired,
  getProductAnalysis: PropTypes.func.isRequired,
  productAnalysis: PropTypes.object.isRequired
};

export default FoodProduct;
