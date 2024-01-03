import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {STATUS} from "../utils/Status";

const initialState = {
  products: [], productsStatus: STATUS.IDLE, productDetail: [], productsDetailStatus: STATUS.IDLE,
};
export const getProducts = createAsyncThunk("getProducts", async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  return await response.json();
});
export const getDetailProduct = createAsyncThunk("getProduct", async (id) => {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  return await response.json();
});
export const getCategoryProduct = createAsyncThunk("getCategory", async (category) => {
  const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
  return await response.json();
});
const productSlice = createSlice({
  name: "products", initialState, reducers: {}, extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state, action) => {
      state.productsStatus = STATUS.LOADING;
    }).addCase(getProducts.fulfilled, (state, action) => {
      state.productsStatus = STATUS.SUCCESS;
      state.products = action.payload;
    }).addCase(getProducts.rejected, (state, action) => {
      state.productsStatus = STATUS.FAIL;
    }).addCase(getDetailProduct.pending, (state, action) => {
      state.productsDetailStatus = STATUS.LOADING;
    }).addCase(getDetailProduct.fulfilled, (state, action) => {
      state.productsDetailStatus = STATUS.SUCCESS;
      state.productDetail = action.payload;
    }).addCase(getDetailProduct.rejected, (state, action) => {
      state.productsDetailStatus = STATUS.FAIL;
    }).addCase(getCategoryProduct.pending, (state, action) => {
      state.productsStatus = STATUS.LOADING;
    }).addCase(getCategoryProduct.fulfilled, (state, action) => {
      state.productsStatus = STATUS.SUCCESS;
      state.products = action.payload;
    }).addCase(getCategoryProduct.rejected, (state, action) => {
      state.productsStatus = STATUS.FAIL;
    });
  },
});

export default productSlice.reducer;
