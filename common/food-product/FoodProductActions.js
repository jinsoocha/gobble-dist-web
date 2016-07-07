export const GET_PRODUCT_ANALYSIS = 'GET_PRODUCT_ANALYSIS';
export const GET_CATEGORY_COMPARISON = 'GET_CATEGORY_COMPARISON';
export const SHOW_PRODUCT_DETAILS = 'SHOW_PRODUCT_DETAILS';
export const GET_RANDOM_RECOMMENDATIONS = 'GET_RANDOM_RECOMMENDATIONS';
export const GET_REVIEWS = 'GET_REVIEWS';
export const ADD_TO_WISH = 'ADD_TO_WISH';

export function getProductAnalysis(productAnalysis) {
  return {
    type: GET_PRODUCT_ANALYSIS,
    productAnalysis,
  };
}

export function getCategoryComparison(categoryComparison) {
  return {
    type: GET_CATEGORY_COMPARISON,
    categoryComparison,
  };
}

export function showProductDetails(selectedProduct) {
  return {
    type: SHOW_PRODUCT_DETAILS,
    selectedProduct,
  };
}

export function getRandomRecommendations(recs, category) {
  return {
    type: GET_RANDOM_RECOMMENDATIONS,
    recs,
    category,
  };
}

export function getReviews(reviews) {
  return {
    type: GET_REVIEWS,
    reviews,
  };
}

export function addToWish(addedWish) {
  return {
    type: ADD_TO_WISH,
    addedWish,
  };
}
