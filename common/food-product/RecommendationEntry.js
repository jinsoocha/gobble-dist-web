import React, { Component, PropTypes } from 'react';
const productComparisonChart = require('./productComparisonChart');

class RecommendationEntry extends Component {
  constructor(props) {
    super(props);
    this.showProductDetails = this.showProductDetails.bind(this);
  }

  componentDidUpdate() {
    // mine the data to fit the chart and create a chart
    const chart = this.refs.productComparisonChart;
    const { product, basicInfo } = this.props;
    const chartData = [];
    let contents = {};
    Object.keys(product).forEach((key) => {
      if (key !== 'name' && key !== 'brand' && key !== 'upc' && key !== 'nutrient'
        && key !== 'quality' && key !== 'image' && product[key] !== null && basicInfo[key]) {
        contents.name = key;
        contents[basicInfo.name] = basicInfo[key];
        contents[product.name] = product[key];
        chartData.push(contents);
      }
      contents = {};
    });
    productComparisonChart.create(chart, chartData);
  }

  showProductDetails(e) {
    e.preventDefault();
    this.props.showProductDetails(this.props.product.upc);
  }

  addToWish(e) {
    e.preventDefault();
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    fetch('http://localhost:4569/review', {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify({ upc: this.props.product.upc }),
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
    const { product, selectedProduct } = this.props;
    let productIntro;
    if (product.quality.length === 1) {
      if (product.quality[0] === 'BadNutrients') {
        productIntro =
        (<div onClick={this.showProductDetails}>
          Click to see a lower {product.nutrient} product details!
        </div>);
      } else {
        productIntro =
        (<div onClick={this.showProductDetails}>
          Click to see a higher {product.nutrient} product details!
        </div>);
      }
    } else {
      productIntro =
      (<div onClick={this.showProductDetails}>
        Click to see the recommended product details!
      </div>);
    }
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginRight: 20 }}>
        {productIntro}
        <img
          onClick={this.showProductDetails}
          role="presentation"
          src={product.image}
          width="100"
          height="100"
          style={{ marginTop: 30, marginBottom: 30 }}
        />
        <button onClick={this.addToWish}>Add to wish list</button>
        {selectedProduct !== product.upc ? null :
        (<div>
          <div>
            <p>Name: {product.name} <br />
            Brand: {product.brand}<br />
            Barcode: {product.upc}</p>
          </div>
          <div ref="productComparisonChart">
          </div>
        </div>)}
      </div>
    );
  }
}

RecommendationEntry.propTypes = {
  product: PropTypes.object.isRequired,
  showProductDetails: PropTypes.func.isRequired,
  selectedProduct: PropTypes.number.isRequired,
  basicInfo: PropTypes.object.isRequired,
};

export default RecommendationEntry;
