import TrackList from "@/components/track-list";
import useNavigationSearch from "@/hooks/use-navigation-search";
import { generateTrackListId } from "@/lib/utils";
import { useAppSelector } from "@/stores/hooks";
import { useTracksStore } from "@/stores/tracks-slice";
import { useMemo } from "react";
import { ScrollView, View } from "react-native";

const FavoritesScreen = () => {
  const search = useNavigationSearch({
    searchBarOptions: {
      placeholder: "Find in songs",
    },
  });
  const { tracks } = useAppSelector(useTracksStore);
  const favoriteTracks = tracks.filter((track) => track.rating === 1);

  const filteredFavoriteTracks = useMemo(() => {
    if (!search) return favoriteTracks;

    return favoriteTracks.filter((track) =>
      track.title?.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, favoriteTracks]);

  return (
    <View className="flex-1 bg-black">
      <ScrollView contentInsetAdjustmentBehavior="automatic" className="px-6">
        <TrackList
          id={generateTrackListId("favorites", search)}
          tracks={filteredFavoriteTracks}
          scrollEnabled={false}
        />
      </ScrollView>
    </View>
  );
};

export default FavoritesScreen;
