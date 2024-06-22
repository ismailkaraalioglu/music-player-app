import TRACKS from "@/assets/data/library.json";
import TrackList from "@/components/track-list";
import useNavigationSearch from "@/hooks/use-navigation-search";
import { useMemo } from "react";
import { ScrollView, View } from "react-native";

const SongsScreen = () => {
  const search = useNavigationSearch({
    searchBarOptions: {
      placeholder: "Find in songs",
    },
  });

  const filteredTracks = useMemo(() => {
    if (!search) return TRACKS;

    return TRACKS.filter((track) =>
      track.title?.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <View className="bg-black flex-1">
      <ScrollView contentInsetAdjustmentBehavior="automatic" className="px-6">
        <TrackList tracks={filteredTracks} scrollEnabled={false} />
      </ScrollView>
    </View>
  );
};

export default SongsScreen;
