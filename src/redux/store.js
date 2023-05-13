import { configureStore } from "@reduxjs/toolkit";
import filter from "./slices/filterSlice";
import popUpSlice from "./slices/popUpSlice";
import cartsSlice from "./slices/cartsSlice";
import searchBarSlice from "./slices/searchBarSlice";

export const store = configureStore({
  reducer:{
    filter,
    popUpSlice,
    cartsSlice,
    searchBarSlice,
  }
})

