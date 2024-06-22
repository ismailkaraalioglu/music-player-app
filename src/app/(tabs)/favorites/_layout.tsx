import { Stack } from "expo-router";
import { View } from "react-native";

const FavoritesScreenLayout = () => {
  return (
    <View className="flex-1 bg-black">
      <Stack>
        <Stack.Screen name="index" options={{ headerTitle: "Favorites" }} />
      </Stack>
    </View>
  );
};

export default FavoritesScreenLayout;
