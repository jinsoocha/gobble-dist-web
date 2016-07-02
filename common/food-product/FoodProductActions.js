export const GET_PRODUCT_ANALYSIS = 'GET_PRODUCT_ANALYSIS';
export const GET_CATEGORY_COMPARISON = 'GET_CATEGORY_COMPARISON';
export const SHOW_PRODUCT_DETAILS = 'SHOW_PRODUCT_DETAILS';

export function getProductAnalysis(productAnalysis) {
  return {
    type: GET_PRODUCT_ANALYSIS,
    productAnalysis
  };
}

export function getCategoryComparison(categoryComparison) {
  return {
    type: GET_CATEGORY_COMPARISON,
    categoryComparison
  };
}

export function showProductDetails(selectedProduct) {
  return {
    type: SHOW_PRODUCT_DETAILS,
    selectedProduct
  };
}
