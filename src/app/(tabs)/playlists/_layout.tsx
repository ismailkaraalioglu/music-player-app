import { StackScreenWithSearchBar } from "@/lib/contants";
import { Stack } from "expo-router";
import { View } from "react-native";

const PlaylistsScreenLayout = () => {
  return (
    <View className="flex-1 bg-black">
      <Stack>
        <Stack.Screen
          name="index"
          options={{ ...StackScreenWithSearchBar, headerTitle: "Playlists" }}
        />
        <Stack.Screen
          name="[name]"
          options={{
            headerTitle: "",
            headerStyle: {
              backgroundColor: "#000",
            },
            headerTintColor: "#2a89d8",
          }}
        />
      </Stack>
    </View>
  );
};

export default PlaylistsScreenLayout;
