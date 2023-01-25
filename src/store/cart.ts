import { createSlice } from "@reduxjs/toolkit";
import { Item } from "../components/items";

type State = {
  sum: number;
  items: Array<Item>;
};

const initialState: State = {
  sum: 0,
  items: [],
};

const cart = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addItem(state) {
      state.sum = state.sum + 1;
      console.log(state.sum);
    },
  },
});

export const { addItem } = cart.actions;

export default cart.reducer;
