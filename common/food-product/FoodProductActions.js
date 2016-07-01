export const GET_PRODUCT_ANALYSIS = 'GET_PRODUCT_ANALYSIS';

export function getProductAnalysis(productAnalysis) {
  return {
    type: GET_PRODUCT_ANALYSIS,
    productAnalysis
  };
}
