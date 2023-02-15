import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// const initialGameState = {
//   textOptions: null,
//   selectedTextOptions: null,
//   spawnRate: null,
//   hardcore: false,
//   animation: false,
// };

// const initTextOptions = {
//   options: [
//     { id: 1, letter: true },
//     { id: 2, number: false },
//     { id: 3, symbols: false },
//   ],
//   selectedId: undefined,
// };

const initialState = {
  difficulty: [
    { id: 1, name: 'faster', },
    { id: 2, name:'fast', },
    { id: 3, name:'normal', },
    { id: 4, name:'slow',  },
    { id: 5, name:'slower', },
  ],
  selectedId: null,
};

// const nightmareMode = {
//   nightmare: false,
// };

// const gameSlice = createSlice({
//   name: "letterShooter",
//   initialGameState,
//   extraReducers: (builder) => {},
// });

// const textOptionsSlice = createSlice({
//   name: "textOptions",
//   initTextOptions,
//   reducers: {},
// });

const difficultySlice = createSlice({
  name: "difficulty",
  initialState,
  reducers: {
    selectId: (state, action) => {
      state.selectedId = action.payload;
    },
    toggleChecked: (state, action) => {
      const isChecked = state.selectedId === action.payload;
      if (isChecked) {
        state.selectedId = undefined; // uncheck
      } else {
        state.selectedId = action.payload; // check
      }
    },
  },
});

export const { selectId, toggleChecked } = difficultySlice.actions;

export default difficultySlice.reducer;
