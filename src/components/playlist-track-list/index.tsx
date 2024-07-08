import useNavigationSearch from "@/hooks/use-navigation-search";
import { generateTrackListId } from "@/lib/utils";
import { Playlist } from "@/models";
import { FC, useMemo } from "react";
import TrackList from "../track-list";
import Header from "./header";

type Props = {
  playlistTracks: Playlist;
};

const PlaylistTrackList: FC<Props> = ({ playlistTracks }) => {
  const search = useNavigationSearch({
    searchBarOptions: {
      placeholder: "Find in playlist",
      hideWhenScrolling: true,
    },
  });

  const filteredPlaylistTracks = useMemo(() => {
    return playlistTracks.tracks.filter((track) =>
      track.title?.toLowerCase().includes(search.toLowerCase())
    );
  }, [playlistTracks.tracks, search]);

  return (
    <TrackList
      id={generateTrackListId(playlistTracks.name, search)}
      scrollEnabled={false}
      hideQueueControls
      ListHeaderComponentStyle={{ flex: 1, marginBottom: 32 }}
      ListHeaderComponent={
        <Header
          imageUrl={playlistTracks.artworkPreview}
          search={search}
          playlistName={playlistTracks.name}
          playlistTracks={playlistTracks.tracks}
        />
      }
      tracks={filteredPlaylistTracks}
    />
  );
};

export default PlaylistTrackList;
