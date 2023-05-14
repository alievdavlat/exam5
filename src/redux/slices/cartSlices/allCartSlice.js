import { createSlice } from "@reduxjs/toolkit";

const initialState = {
allcartItem:[],

}

export const allCartSlice = createSlice({
  name:'allCartSlice',
  initialState,
  reducers:{
      setAllCartItem(state, action) {
        state.allcartItem = action.payload
      },
      likedProduct(state, action){
     state.allcartItem = state.allcartItem.map(obj =>  {
        if (obj.id === action.payload.id) {
          return {...action.payload, isLikded:true}
        } else{
          return obj
        }
      })
    }
  }

})

export const { setAllCartItem, likedProduct } = allCartSlice.actions
export default allCartSlice.reducer

