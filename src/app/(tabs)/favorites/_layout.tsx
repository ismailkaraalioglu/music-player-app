import { StackScreenWithSearchBar } from "@/lib/contants";
import { Stack } from "expo-router";
import { View } from "react-native";

const FavoritesScreenLayout = () => {
  return (
    <View className="flex-1 bg-black">
      <Stack>
        <Stack.Screen
          name="index"
          options={{ ...StackScreenWithSearchBar, headerTitle: "Favorites" }}
        />
      </Stack>
    </View>
  );
};

export default FavoritesScreenLayout;
