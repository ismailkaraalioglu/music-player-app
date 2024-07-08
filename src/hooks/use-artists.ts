import { Artist } from "@/models";
import { useAppSelector } from "@/stores/hooks";
import { useTracksStore } from "@/stores/tracks-slice";
import { useMemo } from "react";

export const useArtists = () => {
  const { tracks } = useAppSelector(useTracksStore);

  const artists: Artist[] = useMemo(() => {
    const artistMap: { [key: string]: Artist } = {};

    tracks.forEach((track) => {
      const artistName = track.artist ?? "Unknown";

      if (!artistMap[artistName]) {
        artistMap[artistName] = { name: artistName, tracks: [] };
      }

      artistMap[artistName].tracks.push(track);
    });

    return Object.values(artistMap);
  }, [tracks]);

  return { artists };
};
