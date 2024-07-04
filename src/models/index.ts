import { Track } from "react-native-track-player";

export type TrackWithPlaylist = Track & { playlist?: string[] };

export type Playlist = {
  name: string;
  tracks: Track[];
  artworkPreview: string;
};

export type Artist = {
  name: string;
  tracks: Track[];
};
