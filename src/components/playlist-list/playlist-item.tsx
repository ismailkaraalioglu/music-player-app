import { Playlist } from "@/models";
import { AntDesign } from "@expo/vector-icons";
import { FC } from "react";
import {
  Text,
  TouchableHighlight,
  TouchableHighlightProps,
  View,
} from "react-native";
import FastImage from "react-native-fast-image";

type Props = {
  playlist: Playlist;
} & TouchableHighlightProps;

const PlaylistItem: FC<Props> = ({ playlist, ...props }) => {
  return (
    <TouchableHighlight activeOpacity={0.8} {...props}>
      <View className="flex-row gap-4 items-center pr-20">
        <FastImage
          source={{
            uri: playlist.artworkPreview,
            priority: FastImage.priority.normal,
          }}
          style={{ width: 70, height: 70, borderRadius: 8 }}
        />
        <View className="flex-row justify-between items-center w-full">
          <Text
            numberOfLines={1}
            className="text-base font-semibold max-w-[80%] text-white"
          >
            {playlist.name}
          </Text>
          <AntDesign
            name="right"
            size={16}
            color="#fff"
            style={{ opacity: 0.5 }}
          />
        </View>
      </View>
    </TouchableHighlight>
  );
};

export default PlaylistItem;
