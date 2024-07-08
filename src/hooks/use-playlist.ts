import { unknownTrackImageUri } from "@/lib/images";
import { Playlist } from "@/models";
import { useAppSelector } from "@/stores/hooks";
import { useTracksStore } from "@/stores/tracks-slice";
import { useMemo } from "react";

export const usePlaylist = () => {
  const { tracks } = useAppSelector(useTracksStore);

  const playlist: Playlist[] = useMemo(() => {
    return tracks.reduce((acc, track) => {
      track.playlist?.forEach((playlistName) => {
        const existingPlaylist = acc.find(
          (playlist) => playlist.name === playlistName
        );

        if (existingPlaylist) {
          existingPlaylist.tracks.push(track);
        } else {
          acc.push({
            name: playlistName,
            tracks: [track],
            artworkPreview: track.artwork ?? unknownTrackImageUri,
          });
        }
      });
      return acc;
    }, [] as Playlist[]);
  }, [tracks]);

  return { playlist };
};
