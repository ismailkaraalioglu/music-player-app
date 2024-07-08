import Loading from "@/components/loading";
import {
  AnimatedText,
  ControlButtons,
  DismissPlayerSymbol,
  ProgressBar,
  RepeatToggle,
  VolumeBar,
} from "@/components/player-controls";
import { usePlayerBackground } from "@/hooks/use-player-background";
import { usePlayerTrackFavorite } from "@/hooks/use-player-track-favorite";
import { unknownTrackImageUri } from "@/lib/images";
import { FontAwesome } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Text, View } from "react-native";
import FastImage from "react-native-fast-image";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useActiveTrack } from "react-native-track-player";

const PlayerScreen = () => {
  const activeTrack = useActiveTrack();
  const { top, bottom } = useSafeAreaInsets();
  const { imageColor } = usePlayerBackground(
    activeTrack?.artwork ?? unknownTrackImageUri
  );
  const { isFavorite, toggleFavorite } = usePlayerTrackFavorite();

  if (!activeTrack) {
    return <Loading />;
  }

  return (
    <LinearGradient
      style={{ flex: 1 }}
      colors={
        imageColor ? [imageColor.background, imageColor.primary] : ["#000"]
      }
    >
      <View className="flex-1 bg-[#00000080] px-6">
        <DismissPlayerSymbol />

        <View
          className="flex-1"
          style={{ marginTop: top + 70, marginBottom: bottom }}
        >
          <View className="flex-row justify-center h-[45%] shadow">
            <FastImage
              source={{
                uri: activeTrack.artwork ?? unknownTrackImageUri,
                priority: FastImage.priority.high,
              }}
              resizeMode="cover"
              style={{ width: "100%", height: "100%", borderRadius: 12 }}
            />
          </View>

          <View className="flex-1">
            <View className="mt-auto ">
              <View className="h-[60px]">
                <View className="flex-row justify-between items-center">
                  <View className="flex-1 overflow-hidden">
                    <AnimatedText
                      text={activeTrack.title ?? ""}
                      animationThreshold={30}
                      style={{
                        fontSize: 22,
                        fontWeight: "700",
                        color: "white",
                      }}
                    />
                  </View>
                  <FontAwesome
                    name={isFavorite ? "heart" : "heart-o"}
                    size={20}
                    color={isFavorite ? "#fc3c44" : "#fff"}
                    style={{ marginHorizontal: 14 }}
                    onPress={toggleFavorite}
                  />
                </View>

                {activeTrack.artist && (
                  <Text
                    numberOfLines={1}
                    className="text-xl opacity-80 max-w-[90%] text-white"
                  >
                    {activeTrack.artist}
                  </Text>
                )}
              </View>

              <ProgressBar />
              <ControlButtons />
            </View>

            <VolumeBar />

            <View className="flex-row items-center justify-center">
              <RepeatToggle style={{ marginBottom: 6 }} size={30} />
            </View>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

export default PlayerScreen;
