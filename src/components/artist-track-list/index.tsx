import useNavigationSearch from "@/hooks/use-navigation-search";
import { generateTrackListId } from "@/lib/utils";
import { Artist } from "@/models";
import { FC, useMemo } from "react";
import TrackList from "../track-list";
import Header from "./header";

type Props = {
  artist: Artist;
};

const ArtistTrackList: FC<Props> = ({ artist }) => {
  const search = useNavigationSearch({
    searchBarOptions: {
      placeholder: "Find in song",
      hideWhenScrolling: true,
    },
  });

  const filteredTracksOfArtist = useMemo(() => {
    return artist.tracks.filter((track) =>
      track.title?.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, artist.tracks]);

  return (
    <TrackList
      id={generateTrackListId(artist.name, search)}
      scrollEnabled={false}
      hideQueueControls
      ListHeaderComponentStyle={{ flex: 1, marginBottom: 32 }}
      ListHeaderComponent={
        <Header
          artistName={artist.name}
          search={search}
          filteredTracksOfArtist={filteredTracksOfArtist}
        />
      }
      tracks={filteredTracksOfArtist}
    />
  );
};

export default ArtistTrackList;
