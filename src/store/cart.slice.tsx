import { createSlice } from "@reduxjs/toolkit";
import { ICartPropduct } from "../core/model/cart.interface";

type cartState = {
  error: any | undefined;
  loading: boolean;
  totalQuantity: number;
  cartProduct: ICartPropduct[];
};

const initialState = {
  error: undefined,
  loading: false,
  totalQuantity: 0,
  cartProduct: [],
} as cartState;

const getUserCartsSlice = createSlice({
  name: `cart`,
  initialState,
  reducers: {
    addToCart(state, action) {
      const prodID = action.payload;

      const findProduct = state.cartProduct.find(
        (el) => el.productId === prodID
      );
      const findProductIdx = state.cartProduct.findIndex(
        (el) => el.productId === prodID
      );

      if (state.cartProduct && findProduct) {
        state.cartProduct[findProductIdx] = {
          productId: prodID,
          quantity: findProduct.quantity + 1,
        };
      } else {
        state.cartProduct.push({
          productId: prodID,
          quantity: 1,
        });
      }
      state.totalQuantity = state.totalQuantity + 1;
    },
  },
});

export default getUserCartsSlice;

export const { addToCart } = getUserCartsSlice.actions;

export const getCartReducer = getUserCartsSlice.reducer;
