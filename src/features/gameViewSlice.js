import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const randomIntInRange = (min, max) => {
  return Math.floor(Math.random()*(max-min)) + min
}

const initialState = {
  selectedCategories: "",
  options: [],
  optionsPlaying: [],
  speed: 0,
  score: 0,
  health: 100,
  animatingOut: false,
  gameTime: 0,
  intSpeed: 50
};

const data = {
  letters: "abcdefghijklmnopqrstuvwxyz".split(""),
  numbers: "0123456789".split(""),
  symbols: "<>;'\"[]{}+=()&%$#@!_-*:.,`?".split(""),
};

const gameViewSlice = createSlice({
  name: "gameView",
  initialState,
  reducers: {
    updateOptions: (state, actions) => {
      const charType = actions.payload;
      charType.map((type) => {
        if (data[type]) {
          state.options.push(data[type]);
          state.options = state.options.concat.apply([], state.options)
        }
      });
    },
    addNewItem: (state, action) => {
      if(state.options.length > 0){
        const index = randomIntInRange(0, state.options.length)
        let item = {
          character: state.options[index],
          xPosition: randomIntInRange(5,95),
          yPosition: -20,
          active: true,
          hitHealth: false,
          remove: false
        }
        state.optionsPlaying.push(item)
      }

    },
  },
});


export const {addNewItem, updateOptions} = gameViewSlice.actions

export default gameViewSlice.reducer;
