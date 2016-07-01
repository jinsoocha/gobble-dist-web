import { GET_PRODUCT_ANALYSIS, GET_CATEGORY_COMPARISON } from './FoodProductActions';

const foodProductInitialState = {
  upc: '',
  productAnalysis: {},
  categoryComparison: ''
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
    default:
      return state;
  }
};

export default foodProductReducer;
