import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  showInput:false,
  inputValue:'',
  showcarts:false,
}

export const searchBarSlice = createSlice({
  name:'searchBarSlice',
  initialState,
  reducers:{
    setShowInput(state, action){
      state.showInput = action.payload
    },
    setInputValue(state, action){
      state.inputValue = action.payload
    },
    setShowCarts(state, action){
      state.showcarts = action.payload
    },
    clearInputValue(state, action) {
      state.inputValue = ''
    },
  }
})

export const { setShowInput, clearInputValue, setInputValue,setShowCarts } = searchBarSlice.actions

export default searchBarSlice.reducer


