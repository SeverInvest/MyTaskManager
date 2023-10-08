import { configureStore } from "@reduxjs/toolkit";
import tasksSlice from "./slices/tasksSlice";
import userSlice from "./slices/userSlice";
import popupSlice from "./slices/popupSlice";
import { loadState } from "../utils";

const preloadedState = loadState();

export const store = configureStore({
  reducer: {
    tasks: tasksSlice,
    user: userSlice,
    popup: popupSlice,
  },
  preloadedState,
});
