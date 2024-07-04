import { configureStore } from "@reduxjs/toolkit";
import queueReducer from "./queue-slice";
import tracksReducer from "./tracks-slice";

export const store = configureStore({
  reducer: {
    tracks: tracksReducer,
    queue: queueReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
