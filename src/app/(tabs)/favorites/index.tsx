import TRACKS from "@/assets/data/library.json";
import TrackList from "@/components/track-list";
import useNavigationSearch from "@/hooks/use-navigation-search";
import { useMemo } from "react";
import { ScrollView, View } from "react-native";

const FavoritesScreen = () => {
  const search = useNavigationSearch({
    searchBarOptions: {
      placeholder: "Find in songs",
    },
  });

  const favoriteTracks = useMemo(() => {
    const filteredTracks = TRACKS.filter(
      (track) =>
        track.rating === 1 &&
        track.title?.toLowerCase().includes(search.toLowerCase())
    );
    return filteredTracks;
  }, [search]);

  return (
    <View className="flex-1 bg-black">
      <ScrollView contentInsetAdjustmentBehavior="automatic" className="px-6">
        <TrackList tracks={favoriteTracks} scrollEnabled={false} />
      </ScrollView>
    </View>
  );
};

export default FavoritesScreen;
