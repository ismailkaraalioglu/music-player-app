import { unknownTrackImageUri } from "@/lib/images";
import { Text, View } from "react-native";
import FastImage from "react-native-fast-image";

const EmptyContent = () => {
  return (
    <View>
      <Text className="text-center mt-5 text-[#9ca3af]">No songs found</Text>
      <FastImage
        source={{
          uri: unknownTrackImageUri,
          priority: FastImage.priority.normal,
        }}
        style={{
          width: 200,
          height: 200,
          alignSelf: "center",
          marginTop: 40,
          opacity: 0.3,
        }}
      />
    </View>
  );
};

export default EmptyContent;
