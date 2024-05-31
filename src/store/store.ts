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
import languageSlice from "./language.slice";



const persistConfig = {
  key: "lang",
  storage,
  whitelist: ['language'],
};

// REDUCERS
// ---------------------------------------------------------------------------------------------------------------------
const combinedReducers: Reducer = combineReducers({
  products: getProductsReducer,
  language : languageSlice,
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
