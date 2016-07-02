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
    case GET_CATEGORY_COMPARISON: {
      let category;
      if (state.categoryComparison === action.categoryComparison) {
        category = '';
      } else {
        category = action.categoryComparison;
      }
      return Object.assign({}, state, {
        categoryComparison: category
      });
    }
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
