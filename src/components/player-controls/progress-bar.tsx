import { formatSecondsToMinute } from "@/lib/utils";
import { Text, View } from "react-native";
import { Slider } from "react-native-awesome-slider";
import { useSharedValue } from "react-native-reanimated";
import TrackPlayer, { useProgress } from "react-native-track-player";

const ProgressBar = () => {
  const { position, duration } = useProgress(250);

  const isSliding = useSharedValue(false);
  const progress = useSharedValue(0);
  const min = useSharedValue(0);
  const max = useSharedValue(1);

  const trackElapsedTime = formatSecondsToMinute(position);
  const trackRemainingTime = formatSecondsToMinute(duration - position);

  if (!isSliding.value) {
    progress.value = duration > 0 ? position / duration : 0;
  }

  return (
    <View className="w-full mt-8">
      <Slider
        progress={progress}
        minimumValue={min}
        maximumValue={max}
        containerStyle={{ height: 7, borderRadius: 16 }}
        thumbWidth={0}
        renderBubble={() => null}
        theme={{
          minimumTrackTintColor: "#ffffff99",
          maximumTrackTintColor: "#ffffff66",
        }}
        onSlidingStart={() => (isSliding.value = true)}
        onValueChange={async (value) => {
          await TrackPlayer.seekTo(value * duration);
        }}
        onSlidingComplete={async (value) => {
          if (!isSliding.value) return;
          isSliding.value = false;
          await TrackPlayer.seekTo(value * duration);
        }}
      />

      <View className="flex-row items-center justify-between mt-5">
        <Text className="text-white opacity-75 text-xs font-medium">
          {trackElapsedTime}
        </Text>
        <Text className="text-white opacity-75 text-xs font-medium">
          {trackRemainingTime}
        </Text>
      </View>
    </View>
  );
};

export default ProgressBar;
