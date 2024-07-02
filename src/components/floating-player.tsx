import { useLastActiveTrack } from "@/hooks/use-last-active-track";
import { unknownTrackImageUri } from "@/lib/images";
import { useRouter } from "expo-router";
import { FC } from "react";
import { TouchableOpacity, View, ViewStyle } from "react-native";
import FastImage from "react-native-fast-image";
import { useActiveTrack } from "react-native-track-player";
import {
  AnimatedText,
  PlayPauseButton,
  SkipToNextButton,
} from "./player-controls";

type Props = {
  style?: ViewStyle;
};

const FloatingPlayer: FC<Props> = ({ style }) => {
  const router = useRouter();
  const activeTrack = useActiveTrack();
  const lastActiveTrack = useLastActiveTrack();

  const displayedTrack = activeTrack ?? lastActiveTrack;

  const handlePress = () => router.navigate("/player");

  if (!displayedTrack) return null;

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      className="flex-row items-center bg-[#252525] px-2 py-3 rounded-xl"
      style={style}
      onPress={handlePress}
    >
      <>
        <FastImage
          source={{ uri: displayedTrack.artwork ?? unknownTrackImageUri }}
          style={{ width: 40, height: 40, borderRadius: 8 }}
        />
        <View className="flex-1 overflow-hidden ml-3">
          <AnimatedText
            text={displayedTrack.title ?? ""}
            animationThreshold={25}
            style={{
              fontSize: 16,
              fontWeight: "600",
              paddingLeft: 12,
              color: "white",
            }}
          />
        </View>
        <View className="flex-row items-center gap-5 mx-4">
          <PlayPauseButton iconSize={24} />
          <SkipToNextButton iconSize={22} />
        </View>
      </>
    </TouchableOpacity>
  );
};

export default FloatingPlayer;
