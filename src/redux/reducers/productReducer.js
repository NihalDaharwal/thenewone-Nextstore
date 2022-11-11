import { PRODUCT_FILTER } from "../constants/ProductConstant";

const initialState = {
  productData: [],
};

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
      case PRODUCT_FILTER:
        return {
          ...state,
          data: action.payload
        };
      default:
        return state;
    }
  };
