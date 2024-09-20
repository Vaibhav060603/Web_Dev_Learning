import { configureStore } from '@reduxjs/toolkit';
import counterReducer from "./counter/counterSlice"


export const ReduxStore = configureStore({
  reducer: {
    counter: counterReducer,
  },
})