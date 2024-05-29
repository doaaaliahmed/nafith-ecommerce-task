import { ErrorModel, IProducts } from "../core/products.interface";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { allProducts } from "../core/services/getProducts";
import { singleProduct } from "../core/services/getSingleProduct";

type productState = {
  error: any | undefined;
  loading: boolean;
  products: IProducts[] | undefined;
  singelProduct: IProducts | undefined;
};

const initialState = {
  error: undefined,
  loading: false,
  products: undefined,
  singelProduct: undefined,
} as productState;

export const getAllProductsThunk = createAsyncThunk<
  Array<IProducts>,
  null,
  { rejectValue: ErrorModel }
>(`products / getAllProducts`, async (_, { rejectWithValue }) => {
  try {
    const response: any = await allProducts.getProducts();
    return response;
  } catch (err: any) {
    let error: ErrorModel = {
      errorTitle: ``,
      errorStatus: ``,
      errorMessage: ``,
      statusCode: 0,
    };
    if (err instanceof AxiosError) {
      error.errorTitle = err.name;
      error.errorMessage = err.message;
      error.errorStatus = err.code;
    } else error = err;
    return rejectWithValue(err);
  }
});

//----Single Product------------------------------------------------------------------------------------------------------------------------------------------------------------

export const getSingleProductsThunk = createAsyncThunk<
  IProducts,
  number,
  { rejectValue: ErrorModel }
>(`products / getSingleProduct`, async (id, { rejectWithValue }) => {
  try {
    const response: any = await singleProduct.getSingleProduct(id);
    return response;
  } catch (err: any) {
    let error: ErrorModel = {
      errorTitle: ``,
      errorStatus: ``,
      errorMessage: ``,
      statusCode: 0,
    };
    if (err instanceof AxiosError) {
      error.errorTitle = err.name;
      error.errorMessage = err.message;
      error.errorStatus = err.code;
    } else error = err;
    return rejectWithValue(err);
  }
});

const getAllProductsSlice = createSlice({
  name: `products`,
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getAllProductsThunk.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAllProductsThunk.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
    });
    builder.addCase(getAllProductsThunk.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    //Single Product
    builder.addCase(getSingleProductsThunk.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getSingleProductsThunk.fulfilled, (state, action) => {
      state.loading = false;
      state.singelProduct = action.payload;
    });
    builder.addCase(getSingleProductsThunk.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
  reducers: {},
});

export default getAllProductsSlice;
export const getProductsReducer = getAllProductsSlice.reducer;
