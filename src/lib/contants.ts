import { NativeStackNavigationOptions } from "@react-navigation/native-stack";

export const StackScreenWithSearchBar: NativeStackNavigationOptions = {
  headerLargeTitle: true,
  headerLargeStyle: {
    backgroundColor: "#000",
  },
  headerLargeTitleStyle: {
    color: "#fff",
  },
  headerTintColor: "#fff",
  headerTransparent: true,
  headerBlurEffect: "prominent",
  headerShadowVisible: false,
};
