import { Event, useTrackPlayerEvents } from "react-native-track-player";

const events = [
  Event.PlaybackState,
  Event.PlaybackError,
  Event.PlaybackActiveTrackChanged,
];

export const useLogPlayerState = () => {
  useTrackPlayerEvents(events, (event) => {
    if (event.type === Event.PlaybackError) {
      console.warn(`An error occurred: ${event}`);
    }
    if (event.type === Event.PlaybackState) {
      console.warn(`Playback state: ${event.state}`);
    }
    if (event.type === Event.PlaybackActiveTrackChanged) {
      console.warn(`Track changed: ${event.index}`);
    }
  });
};
