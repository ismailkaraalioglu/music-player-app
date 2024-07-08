import { FC } from "react";
import { Text, View } from "react-native";
import FastImage from "react-native-fast-image";
import { Track } from "react-native-track-player";
import QueueControls from "../queue-controls";

type Props = {
  imageUrl: string;
  search: string;
  playlistName: string;
  playlistTracks: Track[];
};

const Header: FC<Props> = ({
  search,
  imageUrl,
  playlistName,
  playlistTracks,
}) => {
  return (
    <View>
      <View className="flex-row justify-center h-80">
        <FastImage
          source={{
            uri: imageUrl,
            priority: FastImage.priority.high,
          }}
          style={{ width: "85%", height: "100%", borderRadius: 12 }}
          resizeMode="cover"
        />
      </View>

      <Text
        numberOfLines={1}
        className="mt-6 text-center text-2xl font-extrabold text-white"
      >
        {playlistName}
      </Text>

      {search.length === 0 && (
        <QueueControls tracks={playlistTracks} style={{ paddingTop: 24 }} />
      )}
    </View>
  );
};

export default Header;
