import { Stack } from "expo-router";
import { View } from "react-native";

const ArtistsScreenLayout = () => {
  return (
    <View className="flex-1 bg-black">
      <Stack>
        <Stack.Screen name="index" options={{ headerTitle: "Artists" }} />
      </Stack>
    </View>
  );
};

export default ArtistsScreenLayout;
