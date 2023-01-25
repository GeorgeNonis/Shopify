import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import cart from "./cart";
import item from "./item";

const store = configureStore({
  reducer: {
    item: item,
    cart: cart,
  },
});

const rootReducer = combineReducers({ item, cart });
export type IRootState = ReturnType<typeof rootReducer>;

export default store;
