import { Ionicons } from "@expo/vector-icons";
import { FC } from "react";
import { Text, TouchableOpacity, View, ViewProps } from "react-native";
import TrackPlayer, { Track } from "react-native-track-player";

type Props = {
  tracks: Track[];
} & ViewProps;

const QueueControls: FC<Props> = ({ tracks, ...viewProps }) => {
  const handlePlayButton = async () => {
    await TrackPlayer.setQueue(tracks);
    await TrackPlayer.play();
  };
  const handleShuffleButton = async () => {
    const shuffledTracks = [...tracks].sort(() => Math.random() - 0.5);

    await TrackPlayer.setQueue(shuffledTracks);
    await TrackPlayer.play();
  };

  return (
    <View className="flex-row gap-4 pb-5" {...viewProps}>
      <TouchableOpacity
        activeOpacity={0.8}
        className="flex-1 p-3 rounded-lg flex-row items-center justify-center gap-2 bg-[#2f2f2f80]"
        onPress={handlePlayButton}
      >
        <Ionicons name="play" size={22} color="#2a89d8" />
        <Text className="font-semibold text-lg text-center text-[#2a89d8]">
          Play
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.8}
        className="flex-1 p-3 rounded-lg flex-row items-center justify-center gap-2 bg-[#2f2f2f80]"
        onPress={handleShuffleButton}
      >
        <Ionicons name="shuffle-sharp" size={24} color="#2a89d8" />
        <Text className="font-semibold text-lg text-center text-[#2a89d8]">
          Shuffle
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default QueueControls;
