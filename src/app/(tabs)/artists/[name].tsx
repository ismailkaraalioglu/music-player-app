import ArtistTrackList from "@/components/artist-track-list";
import { useArtists } from "@/hooks/use-artists";
import { Redirect, useLocalSearchParams } from "expo-router";
import { ScrollView, View } from "react-native";

const ArtistDetailScreen = () => {
  const { name: artistName } = useLocalSearchParams<{ name: string }>();
  const { artists } = useArtists();

  const tracksOfArtist = artists.find((artist) => artist.name === artistName);

  if (!tracksOfArtist) {
    console.warn(`Artist ${artistName} not found!`);

    return <Redirect href="/(tabs)/artists" />;
  }

  return (
    <View className="flex-1 bg-black">
      <ScrollView contentInsetAdjustmentBehavior="automatic" className="px-6">
        <ArtistTrackList artist={tracksOfArtist} />
      </ScrollView>
    </View>
  );
};

export default ArtistDetailScreen;
