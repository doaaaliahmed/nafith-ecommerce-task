import { ErrorModel, IProducts } from "../core/model/products.interface";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { allProducts } from "../core/services/getProducts";
import { singleProduct } from "../core/services/getSingleProduct";
import { allCategories } from "../core/services/getCategories";

type productState = {
  error: any | undefined;
  loading: boolean;
  products: IProducts[] | undefined;
  singelProduct: IProducts | undefined;
  filteredProducts: IProducts[] | undefined;
  foundedProducts: IProducts[] | undefined;
  allCategories: string[] | undefined;
  ratings: string[] | undefined;
};

const initialState = {
  error: undefined,
  loading: false,
  products: undefined,
  singelProduct: undefined,
  filteredProducts: undefined,
  foundedProducts: undefined,
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

//----Single Product------------------------------------------------------------------------------------------------------------------------------------------------------------

export const getCategoriesThunk = createAsyncThunk<
  Array<string>,
  null,
  { rejectValue: ErrorModel }
>(`products / getCategories`, async (_, { rejectWithValue }) => {
  try {
    const response: any = await allCategories.getCategories();
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

    //all Categories
    builder.addCase(getCategoriesThunk.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getCategoriesThunk.fulfilled, (state, action) => {
      state.loading = false;
      state.allCategories = action.payload;
    });
    builder.addCase(getCategoriesThunk.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },

  reducers: {
    handleFilterBySearch(state, action) {
      const title = String(action.payload).toLocaleLowerCase();
      state.foundedProducts = state.products?.filter((pr) =>
        pr.title.toLowerCase().includes(title)
      );
    },

    handleFilterByRating(state, action) {
      const rate = action.payload;
      state.filteredProducts = state.products?.filter(
        (pr) => pr.rating.rate >= rate
      );
    },

    handleFilterByCategories(state, action) {
      const cat = action.payload;
      state.filteredProducts = state.products?.filter(
        (pr) => pr.category === cat
      );
    },
    handleFilterClear(state) {
      state.filteredProducts = undefined;
    },

    handleSortingbyRating(state) {
      state.products = state.products?.sort(
        (a, b) => b.rating.rate - a.rating.rate
      );
    },

    handleSortingbyMostPop(state) {
      state.products = state.products?.sort(
        (a, b) => b.rating.count - a.rating.count
      );
    },
    handleSortingbyPrice(state) {
      state.products = state.products?.sort((a, b) => b.price - a.price);
    },
  },
});

export default getAllProductsSlice;
export const {
  handleFilterBySearch,
  handleFilterByRating,
  handleFilterByCategories,
  handleFilterClear,
  handleSortingbyRating,
  handleSortingbyMostPop,
  handleSortingbyPrice
} = getAllProductsSlice.actions;

export const getProductsReducer = getAllProductsSlice.reducer;
