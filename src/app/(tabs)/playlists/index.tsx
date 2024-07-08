import PlaylistList from "@/components/playlist-list";
import useNavigationSearch from "@/hooks/use-navigation-search";
import { usePlaylist } from "@/hooks/use-playlist";
import { Playlist } from "@/models";
import { useRouter } from "expo-router";
import { useMemo } from "react";
import { ScrollView, View } from "react-native";

const PlaylistsScreen = () => {
  const router = useRouter();
  const search = useNavigationSearch({
    searchBarOptions: {
      placeholder: "Find in playlist",
    },
  });

  const { playlist } = usePlaylist();

  const filteredPlaylist = useMemo(() => {
    return playlist.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, playlist]);

  const handlePressPlaylist = (playlist: Playlist) => {
    router.push(`/(tabs)/playlists/${playlist.name}`);
  };

  return (
    <View className="flex-1 bg-black">
      <ScrollView contentInsetAdjustmentBehavior="automatic" className="px-6">
        <PlaylistList
          scrollEnabled={false}
          playlist={filteredPlaylist}
          onPressPlaylist={handlePressPlaylist}
        />
      </ScrollView>
    </View>
  );
};

export default PlaylistsScreen;
