import { ActivityIndicator, View } from "react-native";

const Loading = () => {
  return (
    <View className="flex-1 bg-[#000] justify-center">
      <ActivityIndicator color="#fff" />
    </View>
  );
};

export default Loading;
