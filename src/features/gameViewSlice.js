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

const gameViewSlice = createSlice({
  name: 'gameView',
  initialState,
  reducers: {

  }
})



export default gameViewSlice.reducer;