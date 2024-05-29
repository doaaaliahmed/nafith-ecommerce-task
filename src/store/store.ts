import {
  combineReducers,
  Action,
  ThunkDispatch,
  configureStore,
  Reducer,
  Store,
} from "@reduxjs/toolkit";
import { getProductsReducer } from "./getAllProducts.slice";
// REDUCERS
// ---------------------------------------------------------------------------------------------------------------------
const combinedReducers: Reducer = combineReducers({
  products: getProductsReducer,
});

// ---------------------------------------------------------------------------------------------------------------------
export const store: Store = configureStore({
  reducer: combinedReducers,
});
// ---------------------------------------------------------------------------------------------------------------------
export type RootState = ReturnType<typeof store.getState>;
export type ThunkAppDispatch = ThunkDispatch<RootState, void, Action>;
