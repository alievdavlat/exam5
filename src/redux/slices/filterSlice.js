import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filterProduct:[],

}

export const filterSllice = createSlice({
  name:'filterSlice',
  initialState,
  reducers:{
      setFilterProduct(state, action) {
        state.filterProduct = action.payload
      },

  }
})


export const {setFilterProduct} = filterSllice.actions
export default filterSllice.reducer