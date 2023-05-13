import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartNames:'',
  allProduct:[]
}

export const cartSlice = createSlice({
  name:'cartSlice',
  initialState,
  reducers:{
      setCartNames(state, action) {
        state.cartNames = action.payload
      },
      setAllProduct(state, action){
        state.allProduct = action.payload
      }

  }
})


export const {setCartNames, setAllProduct} = cartSlice.actions
export default cartSlice.reducer