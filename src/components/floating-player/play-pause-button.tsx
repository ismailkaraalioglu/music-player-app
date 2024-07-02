import { FontAwesome } from "@expo/vector-icons";
import { FC } from "react";
import { TouchableOpacity, View, ViewStyle } from "react-native";
import TrackPlayer, { useIsPlaying } from "react-native-track-player";

type Props = {
  style?: ViewStyle;
  iconSize?: number;
};

const PlayPauseButton: FC<Props> = ({ iconSize = 24, style }) => {
  const { playing } = useIsPlaying();
  const iconName = playing ? "pause" : "play";
  const onPress = playing ? TrackPlayer.pause : TrackPlayer.play;

  return (
    <View style={[{ height: iconSize }, style]}>
      <TouchableOpacity activeOpacity={0.85} onPress={onPress}>
        <FontAwesome name={iconName} size={iconSize} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

export default PlayPauseButton;
