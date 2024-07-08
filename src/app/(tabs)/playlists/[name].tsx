import PlaylistTrackList from "@/components/playlist-track-list";
import { usePlaylist } from "@/hooks/use-playlist";
import { Redirect, useLocalSearchParams } from "expo-router";
import { ScrollView, View } from "react-native";

const PlaylistDetailScreen = () => {
  const { name: playlistName } = useLocalSearchParams<{ name: string }>();
  const { playlist } = usePlaylist();

  const tracksOfPlaylist = playlist.find((item) => item.name === playlistName);

  if (!tracksOfPlaylist) {
    console.warn(`Playlist ${playlistName} was not found!`);

    return <Redirect href="/(tabs)/playlists" />;
  }

  return (
    <View className="flex-1 bg-black">
      <ScrollView contentInsetAdjustmentBehavior="automatic" className="px-6">
        <PlaylistTrackList playlistTracks={tracksOfPlaylist} />
      </ScrollView>
    </View>
  );
};

export default PlaylistDetailScreen;
