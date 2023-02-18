import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import _, {without} from "underscore";

const initialState = {
  textOptions: [
    { isSelected: true, option: "letters" },
    { isSelected: false, option: "numbers" },
    { isSelected: false, option: "symbols" },
  ],
  // textOptions:["letters","numbers","symbols"],
  selectedTextOptions: [],
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
      if(arr.indexOf(newValue) === -1){
        arr.push(newValue)
      } else if (arr.includes(newValue)){
        console.log('match', newValue)
        arr.slice(0, newValue-1).concat(arr.slice(newValue + 1))
        console.log(current(arr))
      }
    },
    selectedId: (state, action) => {
      state.selectedTextOptions.push(action.payload);
    },
    // either select or deselect this id
    // action.payload is the id
    toggleChecked: (state, action) => {
      const isChecked = state.selectedTextOptions === action.payload;
      if (isChecked) {
        state.selectedId = null; // uncheck
      } else {
        state.selectedId = action.payload; // check
      }
    },
    // action.payload is an item with name and id properties
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
  },
});

export const { selectedTextType } = startViewSlice.actions;

export default startViewSlice.reducer;
