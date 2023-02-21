import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
      selectedCategories: '',
      options: [],
      optionsPlaying: [],
      speed: 0,
      score: 0,
      health: 100,
      animatingOut: false
}

const data = {
  letters: "abcdefghijklmnopqrstuvwxyz".split(""),
  numbers: "0123456789".split(""),
  symbols: "<>;'\"[]{}+=()&%$#@!_-*:.,`?".split(""),
};

const gameViewSlice = createSlice({
  name: 'gameView',
  initialState,
  reducers: {
    updateOptions: (state, action) => {
      state.options = action.payload
    },
    addNewItem: (state, action) => {
      state.optionsPlaying = [...state.optionsPlaying, action.payload]
    }
  }
})


export const  {updateOptions} = gameViewSlice.actions
export default gameViewSlice.reducer;