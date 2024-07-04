import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "./store";

interface QueueState {
  activeQueueId: string | null;
}

const initialState: QueueState = {
  activeQueueId: null,
};

export const queueSlice = createSlice({
  name: "queue",
  initialState,
  reducers: {
    setActiveQueueId: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      state.activeQueueId = id;
    },
  },
});

export const { setActiveQueueId } = queueSlice.actions;

export const useQueueStore = (state: RootState) => state.queue;

export default queueSlice.reducer;
