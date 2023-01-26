import { createSlice } from "@reduxjs/toolkit";
import { Item } from "../components/items";

type State = {
  display: boolean;
  details: Item;
};

const initialState: State = {
  display: false,
  details: {
    category: "",
    id: 0,
    title: "",
    price: 0,
    image: "",
    description: "",
    rating: {
      rate: 0,
      count: 0,
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
