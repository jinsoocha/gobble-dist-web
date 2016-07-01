import { GET_PRODUCT_ANALYSIS } from './FoodProductActions';

const foodProductInitialState = {
  upc: '',
  productAnalysis: {}
};

const foodProductReducer = (state = foodProductInitialState, action) => {
  switch (action.type) {
    case GET_PRODUCT_ANALYSIS:
      return Object.assign({}, state, {
        productAnalysis: action.productAnalysis
      });
    default:
      return state;
  }
};

export default foodProductReducer;
