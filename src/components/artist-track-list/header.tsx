import { unknownArtistImageUri } from "@/lib/images";
import { FC } from "react";
import { Text, View } from "react-native";
import FastImage from "react-native-fast-image";
import { Track } from "react-native-track-player";
import QueueControls from "../queue-controls";

type Props = {
  search: string;
  artistName: string;
  filteredTracksOfArtist: Track[];
};

const Header: FC<Props> = ({ search, artistName, filteredTracksOfArtist }) => {
  return (
    <View>
      <View className="flex-row justify-center h-52">
        <FastImage
          source={{
            uri: unknownArtistImageUri,
            priority: FastImage.priority.high,
          }}
          style={{ width: "50%", height: "100%", borderRadius: 128 }}
          resizeMode="cover"
        />
      </View>

      <Text
        numberOfLines={1}
        className="mt-6 text-center text-2xl font-extrabold text-white"
      >
        {artistName}
      </Text>

      {search.length === 0 && (
        <QueueControls
          tracks={filteredTracksOfArtist}
          style={{ paddingTop: 24 }}
        />
      )}
    </View>
  );
};

export default Header;
