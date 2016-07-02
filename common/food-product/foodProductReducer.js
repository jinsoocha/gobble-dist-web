import { GET_PRODUCT_ANALYSIS, GET_CATEGORY_COMPARISON, SHOW_PRODUCT_DETAILS, GET_RANDOM_RECOMMENDATIONS } from './FoodProductActions';

const foodProductInitialState = {
  upc: '',
  productAnalysis: {},
  categoryComparison: '',
  selectedProduct: 0,
  recommendationsStorage: {}
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
    case SHOW_PRODUCT_DETAILS:
      return Object.assign({}, state, {
        selectedProduct:
        state.selectedProduct === action.selectedProduct ? 0
        : action.selectedProduct
      });
    case GET_RANDOM_RECOMMENDATIONS: {
      const newStorage = Object.assign({}, state.recommendationsStorage);
      if (!state.recommendationsStorage[action.chosenRecommendation.UPC]) {
        newStorage[action.chosenRecommendation.UPC] = action.chosenRecommendation;
      } else {
        newStorage[action.chosenRecommendation.UPC].quality = 'both';
        newStorage[action.chosenRecommendation.UPC].nutrient.push(action.chosenRecommendation.nutrient[0]);
      }
      return Object.assign({}, state, {
        recommendationsStorage: newStorage
      });
    }
    default:
      return state;
  }
};

export default foodProductReducer;
