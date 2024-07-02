import { unknownTrackImageUri } from "@/lib/images";
import { Entypo } from "@expo/vector-icons";
import { FC } from "react";
import { Text, TouchableHighlight, View } from "react-native";
import FastImage from "react-native-fast-image";
import { Track, useActiveTrack } from "react-native-track-player";

type Props = {
  track: Track;
  onSelectTrack: (track: Track) => void;
};

const TrackItem: FC<Props> = ({ track, onSelectTrack }) => {
  const isActive = useActiveTrack()?.url === track.url;

  const handleTrackSelect = () => {
    onSelectTrack(track);
  };

  return (
    <TouchableHighlight onPress={handleTrackSelect}>
      <View className="flex flex-row items-center pr-5 gap-4">
        <View>
          <FastImage
            source={{
              uri: track.artwork ?? unknownTrackImageUri,
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

        <View className="flex-1 flex-row items-center">
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
          <Entypo name="dots-three-vertical" size={18} color="#fff" />
        </View>
      </View>
    </TouchableHighlight>
  );
};

export default TrackItem;
