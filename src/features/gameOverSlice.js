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

const gameOverSlice = createSlice({
  name: 'gameOver',
  initialState,
  reducers: {

  }
})



export default gameOverSlice.reducer;