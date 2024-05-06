import { configureStore, createSlice } from "@reduxjs/toolkit";

// for items/products
const itemsSlice = createSlice({
  name: "items",
  initialState: [],

  reducers: {
    addInitialItems: (store, action) => {
      return action.payload;
    },
  },
});
// for loader
const fetchingLoaderSlice = createSlice({
  name: "loader",
  initialState: false,
  reducers: {
    setLoadingStateTrue: (state) => {
      return (state = true);
    },
  },
});

// for cart/bag
const cartSlice = createSlice({
  name: "cartItems",
  initialState: [],
  reducers: {
    addToBag: (cartArray, action) => {
      cartArray.push(action.payload);
    },
    removeFromBag: (cartArray, action) => {
      const newArr = cartArray.filter((itemId) => {
        return itemId !== action.payload;
      });
      return newArr;
    },
  },
});

const myntraStore = configureStore({
  reducer: {
    items: itemsSlice.reducer,
    loader: fetchingLoaderSlice.reducer,
    cartItems: cartSlice.reducer,
  },
});
export const itemActions = itemsSlice.actions;
export const fetchActions = fetchingLoaderSlice.actions;
export const cartActions = cartSlice.actions;
export default myntraStore;
