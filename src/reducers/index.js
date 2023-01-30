import { combineReducers } from "redux";
import products from "./products";
import cart from "./cart";

export const reducer= combineReducers({products, cart});
