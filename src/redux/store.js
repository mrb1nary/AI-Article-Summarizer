import { configureStore } from "@reduxjs/toolkit";
import { articleSlice } from "./articleSlice";

export const store = configureStore({
  reducer: {
    [articleSlice.reducerPath]: articleSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(articleSlice.middleware),
});
