import { PRODUCT_FILTER } from "../constants/ProductConstant";

export const products = (data) => {
  return {
    type: PRODUCT_FILTER,
    payload: data
  };
};

