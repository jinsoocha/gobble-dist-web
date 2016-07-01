export const GET_PRODUCT_ANALYSIS = 'GET_PRODUCT_ANALYSIS';
export const GET_CATEGORY_COMPARISON = 'GET_CATEGORY_COMPARISON';

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
