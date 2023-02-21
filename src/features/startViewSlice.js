import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
// import _, {without} from "underscore";

const initialState = {
  textOptions: [
    { isSelected: true, option: "letters" },
    { isSelected: false, option: "numbers" },
    { isSelected: false, option: "symbols" },
  ],
  // textOptions:["letters","numbers","symbols"],
  selectedTextOptions: ["letters"],
  speedOptions: ["Slower", "Slow", "Normal", "Fast", "Faster"],
  selectedSpeedOption: "Normal",
  spawnRate: 20,
  hardcore: false,
  animatingOut: false,
};

const startViewSlice = createSlice({
  name: "startView",
  initialState,
  reducers: {
    selectedTextType(state, action) {
      let newValue = action.payload;
      // console.log(newValue)
      let arr = state.selectedTextOptions;
      if (arr.indexOf(newValue) === -1) {
        arr.push(newValue);
      } else if (arr.includes(newValue)) {
        state.selectedTextOptions = state.selectedTextOptions.filter(
          (option) => option !== newValue
        );
      }
    },
    // either select or deselect this id
    // action.payload is the id
    toggleChecked: (state, action) => {
      state.textOptions.forEach((option) => {
        if (option.option === action.payload.option) {
          option.isSelected = !option.isSelected;
        }
      });
    },
    toggleHardcoreMode: (state, action) => {
      state.hardcore = !state.hardcore;
    },
    selectedSpeed: (state, action) => {
      state.selectedSpeedOption.push(action.payload);
    },
    toggleSpeedChecked: (state, action) => {
      const isChecked = state.selectedSpeedOption === action.payload;
      if (isChecked) {
        state.selectedSpeedOption = null; // uncheck
      } else {
        state.selectedSpeedOption = action.payload; // check
      }
    },
    selectedSpawnRate: (state, action) => {
      state.spawnRate = action.payload;
      // console.log(current(spawnRate))
    },
    setAnimation: (state, action) => {
      state.animatingOut = true;
      // console.log(current(state.animatingOut))
    },
  },
});

export const {
  animatingOut,
  selectedSpawnRate,
  selectedTextType,
  toggleChecked,
  toggleHardcoreMode,
  selectedSpeed,
  toggleSpeedChecked,
  setAnimation,
} = startViewSlice.actions;

export default startViewSlice.reducer;
