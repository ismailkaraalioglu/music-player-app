import { unknownTrackImageUri } from "@/lib/images";
import { FC } from "react";
import { Text, TouchableHighlight, View } from "react-native";
import FastImage from "react-native-fast-image";

type Props = {
  track: { title: string; image?: string; artist?: string };
};

const TrackListItem: FC<Props> = ({ track }) => {
  const isActive = false;

  return (
    <TouchableHighlight>
      <View className="flex flex-row items-center pr-5 gap-4">
        <View>
          <FastImage
            source={{
              uri: track.image ?? unknownTrackImageUri,
              priority: FastImage.priority.normal,
            }}
            style={{
              opacity: isActive ? 0.6 : 1,
              width: 50,
              height: 50,
              borderRadius: 8,
            }}
          />
        </View>

        <View className="w-full">
          <Text
            numberOfLines={1}
            className="text-base font-semibold max-w-[90%] text-white"
            style={{ color: isActive ? "#2a89d8" : "#fff" }}
          >
            {track.title}
          </Text>
          {track.artist && (
            <Text numberOfLines={1} className="text-sm mt-1 text-[#9ca3af]">
              {track.artist}
            </Text>
          )}
        </View>
      </View>
    </TouchableHighlight>
  );
};

export default TrackListItem;
