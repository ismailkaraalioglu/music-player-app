import { View } from "react-native";
import PlayPauseButton from "./play-pause-button";
import SkipToNextButton from "./skip-to-next-button";
import SkipToPreviousButton from "./skip-to-previous-button";

const ControlButtons = () => {
  return (
    <View className="w-full mt-10">
      <View className="flex-row items-center justify-evenly">
        <SkipToPreviousButton />
        <PlayPauseButton />
        <SkipToNextButton />
      </View>
    </View>
  );
};

export default ControlButtons;
