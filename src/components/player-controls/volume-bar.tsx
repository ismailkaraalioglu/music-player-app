import { usePlayerVolume } from "@/hooks/use-player-volume";
import { Ionicons } from "@expo/vector-icons";
import { View } from "react-native";
import { Slider } from "react-native-awesome-slider";
import { useSharedValue } from "react-native-reanimated";

const VolumeBar = () => {
  const { volume, updateVolume } = usePlayerVolume();
  const progress = useSharedValue(0);
  const min = useSharedValue(0);
  const max = useSharedValue(1);

  progress.value = volume ?? 0;

  return (
    <View className="mt-auto mb-8">
      <View className="flex-row items-center">
        <Ionicons
          name="volume-low"
          size={20}
          color="#fff"
          style={{ opacity: 0.8 }}
        />
        <View className="flex-1 flex-row px-3">
          <Slider
            progress={progress}
            minimumValue={min}
            maximumValue={max}
            containerStyle={{ height: 7, borderRadius: 16 }}
            renderBubble={() => null}
            thumbWidth={0}
            theme={{
              minimumTrackTintColor: "#ffffff99",
              maximumTrackTintColor: "#ffffff66",
            }}
            onValueChange={(value) => updateVolume(value)}
          />
        </View>
        <Ionicons
          name="volume-high"
          size={20}
          color="#fff"
          style={{ opacity: 0.8 }}
        />
      </View>
    </View>
  );
};

export default VolumeBar;
