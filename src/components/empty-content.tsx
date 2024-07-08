import { unknownArtistImageUri, unknownTrackImageUri } from "@/lib/images";
import { FC } from "react";
import { Text, View } from "react-native";
import FastImage from "react-native-fast-image";

type Props = {
  message: string;
  isTrackList?: boolean;
};

const EmptyContent: FC<Props> = ({ message, isTrackList }) => {
  const imageUri = isTrackList ? unknownTrackImageUri : unknownArtistImageUri;

  return (
    <View>
      <Text className="text-center mt-5 text-[#9ca3af]">{message}</Text>
      <FastImage
        source={{
          uri: imageUri,
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
