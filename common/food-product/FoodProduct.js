import React, { PropTypes } from 'react';
import MainLayoutContainer from './../main-layout/MainLayoutContainer';

const FoodProduct = (props) => (
  <MainLayoutContainer>
    <h1>Specific Food Product Page for {props.upc}</h1>
    <p>The product information populated into this page will be dynamic and dependent upon the url.</p>
  </MainLayoutContainer>
);

FoodProduct.propTypes = {
  upc: PropTypes.string.isRequired
};

export default FoodProduct;
