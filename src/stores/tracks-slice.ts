import TRACKS from "@/assets/data/library.json";
import { TrackWithPlaylist } from "@/models";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { Track } from "react-native-track-player";
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
    toggleTrackFavorite: (state, action: PayloadAction<Track>) => {
      const track = action.payload;
      const newTrackList = state.tracks.map((storeTrack) => {
        if (storeTrack.url === track.url) {
          return {
            ...storeTrack,
            rating: storeTrack.rating === 1 ? 0 : 1,
          };
        }
        return storeTrack;
      });

      state.tracks = newTrackList;
    },
    addToPlaylist: (
      state,
      action: PayloadAction<{ track: Track; playlistName: string }>
    ) => {
      const { track, playlistName } = action.payload;
      const newTrackList = state.tracks.map((storeTrack) => {
        if (storeTrack.url === track.url) {
          return {
            ...storeTrack,
            playlist: [...(storeTrack.playlist ?? []), playlistName],
          };
        }
        return storeTrack;
      });

      state.tracks = newTrackList;
    },
  },
});

export const { toggleTrackFavorite, addToPlaylist } = tracksSlice.actions;

export const useTracksStore = (state: RootState) => state.tracks;

export default tracksSlice.reducer;
