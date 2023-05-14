import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  item: {}
}

export const singlePageSlice = createSlice({
  name:'singlePageSlice',
  initialState,
  reducers:{
    setItem(state, action){
      state.item = action.payload
    },
  }
})

export const { setItem } = singlePageSlice.actions

export default singlePageSlice.reducer