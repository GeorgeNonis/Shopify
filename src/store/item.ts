import { createSlice } from "@reduxjs/toolkit";

export type State = {
  display: boolean;
  details: {
    title: string;
    price: number;
    image: string;
    rating: {
      rate: number;
    };
  };
};

const initialState: State = {
  display: false,
  details: {
    title: "",
    price: 0,
    image: "",
    rating: {
      rate: 0,
    },
  },
};

// type State = number
// const increment: CaseReducer<State, PayloadAction<number>> = (state, action) =>
//   state + action.payload

const item = createSlice({
  name: "item",
  initialState,
  reducers: {
    // increment
    displayHandler(state) {
      state.display = !state.display;
    },
    displayItem(state, { payload }) {
      state.details = { ...payload };
    },
  },
});

export const { displayHandler, displayItem } = item.actions;

export default item.reducer;
