import { FontAwesome6 } from "@expo/vector-icons";
import { FC } from "react";
import { TouchableOpacity } from "react-native";
import TrackPlayer from "react-native-track-player";

type Props = {
  iconSize?: number;
};

const SkipToNextButton: FC<Props> = ({ iconSize = 24 }) => {
  const handlePress = () => {
    TrackPlayer.skipToNext();
  };

  return (
    <TouchableOpacity activeOpacity={0.7} onPress={handlePress}>
      <FontAwesome6 name="forward" size={iconSize} color="#fff" />
    </TouchableOpacity>
  );
};

export default SkipToNextButton;
