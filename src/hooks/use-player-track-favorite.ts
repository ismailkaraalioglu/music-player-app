import { useAppDispatch, useAppSelector } from "@/stores/hooks";
import { toggleTrackFavorite, useTracksStore } from "@/stores/tracks-slice";
import { useCallback } from "react";
import TrackPlayer, { useActiveTrack } from "react-native-track-player";

export const usePlayerTrackFavorite = () => {
  const activeTrack = useActiveTrack();
  const { tracks } = useAppSelector(useTracksStore);
  const dispatch = useAppDispatch();
  const favoriteTracks = tracks.filter((track) => track.rating === 1);

  const isFavorite =
    favoriteTracks.find((track) => track.url === activeTrack?.url)?.rating ===
    1;

  const toggleFavorite = useCallback(async () => {
    const id = await TrackPlayer.getActiveTrackIndex();

    if (id == null) return;

    await TrackPlayer.updateMetadataForTrack(id, {
      rating: isFavorite ? 0 : 1,
    });

    if (activeTrack) {
      dispatch(toggleTrackFavorite(activeTrack));
    }
  }, [isFavorite, activeTrack, dispatch]);

  return { isFavorite, toggleFavorite };
};
