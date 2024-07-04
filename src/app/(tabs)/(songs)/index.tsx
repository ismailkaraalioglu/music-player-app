import TrackList from "@/components/track-list";
import useNavigationSearch from "@/hooks/use-navigation-search";
import { generateTrackListId } from "@/lib/utils";
import { useAppSelector } from "@/stores/hooks";
import { useTracksStore } from "@/stores/tracks-slice";
import { useMemo } from "react";
import { ScrollView, View } from "react-native";

const SongsScreen = () => {
  const search = useNavigationSearch({
    searchBarOptions: {
      placeholder: "Find in songs",
    },
  });
  const { tracks } = useAppSelector(useTracksStore);

  const filteredTracks = useMemo(() => {
    if (!search) return tracks;

    return tracks.filter((track) =>
      track.title?.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, tracks]);

  return (
    <View className="bg-black flex-1">
      <ScrollView contentInsetAdjustmentBehavior="automatic" className="px-6">
        <TrackList
          id={generateTrackListId("songs", search)}
          tracks={filteredTracks}
          scrollEnabled={false}
        />
      </ScrollView>
    </View>
  );
};

export default SongsScreen;
