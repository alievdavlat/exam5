import { createSlice } from "@reduxjs/toolkit";

const initialState = {
 isLiked:false,
 likedId:null,
}

export const likeSlice = createSlice({
  name:'likeSlice',
  initialState,
  reducers:{
      setIsLiked(state, action){
        state.isLiked = action.payload
      },
  }
})

export const  { setIsLiked } = likeSlice.actions
export default likeSlice.reducer
