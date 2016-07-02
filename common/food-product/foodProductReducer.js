import { GET_PRODUCT_ANALYSIS, GET_CATEGORY_COMPARISON, SHOW_PRODUCT_DETAILS } from './FoodProductActions';

const foodProductInitialState = {
  upc: '',
  productAnalysis: {},
  categoryComparison: '',
  productDetails: {}
};

const foodProductReducer = (state = foodProductInitialState, action) => {
  switch (action.type) {
    case GET_PRODUCT_ANALYSIS:
      return Object.assign({}, state, {
        productAnalysis: action.productAnalysis
      });
    case GET_CATEGORY_COMPARISON:
      return Object.assign({}, state, {
        categoryComparison: action.categoryComparison,
        productDetails: {}
      });
    case SHOW_PRODUCT_DETAILS: {
      let productDetails;
      if (state.productDetails.UPC === action.productDetails.UPC) {
        productDetails = {};
      } else {
        productDetails = action.productDetails;
      }
      return Object.assign({}, state, {
        productDetails
      });
    }
    default:
      return state;
  }
};

export default foodProductReducer;
