import TRACKS from "@/assets/data/library.json";
import { TrackWithPlaylist } from "@/models";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "./store";

interface TracksState {
  tracks: TrackWithPlaylist[];
}

const initialState: TracksState = {
  tracks: TRACKS,
};

export const tracksSlice = createSlice({
  name: "tracks",
  initialState,
  reducers: {
    toggleTrackFavorite: (state, action: PayloadAction<number>) => {},
    addToPlaylist: (state, action: PayloadAction<number>) => {},
  },
});

export const { toggleTrackFavorite, addToPlaylist } = tracksSlice.actions;

export const useTracksStore = (state: RootState) => state.tracks;

export default tracksSlice.reducer;
