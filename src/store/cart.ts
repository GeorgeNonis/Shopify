import { createSlice } from "@reduxjs/toolkit";
import { Item } from "../components/items";

interface SavedItem extends Item {
  sum: number;
}

type State = {
  display: boolean;
  sum: number;
  items: Array<SavedItem>;
};

const initialState: State = {
  display: false,
  sum: 0,
  items: [],
};

const cart = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    displayCart(state) {
      state.display = !state.display;
    },
    addItem(state, { payload }) {
      state.sum = state.sum + payload.value;
      const existing = state.items.find((i) => i.id === payload.item.id);
      if (existing !== undefined) {
        existing.sum = existing.sum + payload.value;
        state.items = [...state.items];
      } else {
        const newObject = {
          ...payload.item,
          sum: payload.value,
        };
        state.items = [...state.items, newObject];
      }
    },
    increaseItem(state, { payload }) {
      const id = payload;
      const item = state.items.find((i) => i.id === id);
      state.sum = state.sum + 1;
      item!.sum = item!.sum + 1;
    },
    decreaseItem(state, { payload }) {
      const id = payload;
      const item = state.items.find((i) => i.id === id);
      state.sum = state.sum - 1;
      item!.sum = item!.sum - 1;
    },
    removeItem(state, { payload }) {
      const id = payload;
      const item = state.items.find((i) => i.id === id);
      const newState = state.items.filter((i) => i.id !== id);
      state.sum = state.sum - item!.sum;
      state.items = [...newState];
    },
  },
});

export const { addItem, displayCart, increaseItem, decreaseItem, removeItem } =
  cart.actions;

export default cart.reducer;
