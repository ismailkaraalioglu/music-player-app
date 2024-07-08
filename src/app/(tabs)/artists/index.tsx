import EmptyContent from "@/components/empty-content";
import { useArtists } from "@/hooks/use-artists";
import useNavigationSearch from "@/hooks/use-navigation-search";
import { unknownArtistImageUri } from "@/lib/images";
import { Link } from "expo-router";
import { useMemo } from "react";
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import FastImage from "react-native-fast-image";

const ItemSeparatorComponent = () => {
  return (
    <View
      className="my-3 ml-16 opacity-30 border-[#9ca3af]"
      style={{ borderWidth: StyleSheet.hairlineWidth }}
    />
  );
};

const ArtistsScreen = () => {
  const search = useNavigationSearch({
    searchBarOptions: {
      placeholder: "Find in artist",
    },
  });
  const { artists } = useArtists();

  const filteredArtists = useMemo(() => {
    if (!search) return artists;

    return artists.filter((artist) =>
      artist.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, artists]);

  return (
    <View className="flex-1 bg-black">
      <ScrollView contentInsetAdjustmentBehavior="automatic" className="px-6">
        <FlatList
          scrollEnabled={false}
          contentContainerStyle={{ paddingTop: 10, paddingBottom: 120 }}
          ItemSeparatorComponent={ItemSeparatorComponent}
          ListFooterComponent={ItemSeparatorComponent}
          ListEmptyComponent={<EmptyContent message="No artist found" />}
          data={filteredArtists}
          renderItem={({ item: artist }) => (
            <Link href={`/artists/${artist.name}`} asChild>
              <TouchableHighlight activeOpacity={0.8}>
                <View className="flex-row gap-3 items-center">
                  <FastImage
                    source={{
                      uri: unknownArtistImageUri,
                      priority: FastImage.priority.normal,
                    }}
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 32,
                    }}
                  />
                  <View className="w-full">
                    <Text
                      numberOfLines={1}
                      className="text-base max-w-[80%] text-white"
                    >
                      {artist.name}
                    </Text>
                  </View>
                </View>
              </TouchableHighlight>
            </Link>
          )}
        />
      </ScrollView>
    </View>
  );
};

export default ArtistsScreen;
