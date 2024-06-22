import { Stack } from "expo-router";
import { View } from "react-native";

const SongsScreenLayout = () => {
  return (
    <View className="flex-1 bg-black">
      <Stack>
        <Stack.Screen name="index" options={{ headerTitle: "Songs" }} />
      </Stack>
    </View>
  );
};

export default SongsScreenLayout;
