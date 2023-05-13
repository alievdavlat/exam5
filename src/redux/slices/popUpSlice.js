import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  popUpShow:false,

}

export const popUpSlice = createSlice({
  name:'popUpSlice',
  initialState,
  reducers:{
      setPopUpShow(state, action) {
        state.popUpShow = action.payload
      },

  }
})


export const {setPopUpShow} = popUpSlice.actions
export default popUpSlice.reducer