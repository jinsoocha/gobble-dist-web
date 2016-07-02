import { GET_PRODUCT_ANALYSIS, GET_CATEGORY_COMPARISON, SHOW_PRODUCT_DETAILS } from './FoodProductActions';

const foodProductInitialState = {
  upc: '',
  productAnalysis: {},
  categoryComparison: '',
  selectedProduct: 0
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
        selectedProduct: 0
      });
    case SHOW_PRODUCT_DETAILS: {
      let selectedProduct;
      if (state.selectedProduct === action.selectedProduct) {
        selectedProduct = '';
      } else {
        selectedProduct = action.selectedProduct;
      }
      return Object.assign({}, state, {
        selectedProduct
      });
    }
    default:
      return state;
  }
};

export default foodProductReducer;
