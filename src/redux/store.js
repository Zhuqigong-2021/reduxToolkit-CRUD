import { configureStore, combineReducers } from "@reduxjs/toolkit";
import UserReducer from "./reducer/UserSlice";
const reducer = combineReducers({
  user: UserReducer
});
export const store = configureStore({
  reducer
});
