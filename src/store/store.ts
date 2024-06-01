import {
  combineReducers,
  Action,
  ThunkDispatch,
  configureStore,
  Reducer,
  Store,
} from "@reduxjs/toolkit";
import { getProductsReducer } from "./getAllProducts.slice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { getLanguageReducer } from "./language.slice";
import { getCartReducer } from "./cart.slice";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["products"],
};

// REDUCERS
// ---------------------------------------------------------------------------------------------------------------------
const combinedReducers: Reducer = combineReducers({
  products: getProductsReducer,
  language: getLanguageReducer,
  cart: getCartReducer,
});

// ---------------------------------------------------------------------------------------------------------------------
const persistedReducer = persistReducer(persistConfig, combinedReducers);

// ---------------------------------------------------------------------------------------------------------------------
export const store: Store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
});
// ---------------------------------------------------------------------------------------------------------------------
export type RootState = ReturnType<typeof store.getState>;
export const persistor = persistStore(store);
export type ThunkAppDispatch = ThunkDispatch<RootState, void, Action>;
