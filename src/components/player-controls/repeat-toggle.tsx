import { usePlayerRepeatMode } from "@/hooks/use-player-repeat-mode";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ComponentProps, FC } from "react";
import { RepeatMode } from "react-native-track-player";
import { match } from "ts-pattern";

type IconProps = Omit<ComponentProps<typeof MaterialCommunityIcons>, "name">;
type IconName = ComponentProps<typeof MaterialCommunityIcons>["name"];

const REPEAT_ORDER = [
  RepeatMode.Off,
  RepeatMode.Queue,
  RepeatMode.Track,
] as const;

const RepeatToggle: FC<IconProps> = ({ ...iconProps }) => {
  const { repeatMode, changeRepeatMode } = usePlayerRepeatMode();

  const icon = match(repeatMode)
    .returnType<IconName>()
    .with(RepeatMode.Off, () => "repeat-off")
    .with(RepeatMode.Queue, () => "repeat")
    .with(RepeatMode.Track, () => "repeat-once")
    .otherwise(() => "repeat-off");

  const toggleRepeatMode = () => {
    if (repeatMode === undefined) return;

    const currentIndex = REPEAT_ORDER.indexOf(repeatMode);
    const nextIndex = (currentIndex + 1) % REPEAT_ORDER.length;

    changeRepeatMode(REPEAT_ORDER[nextIndex]);
  };

  return (
    <MaterialCommunityIcons
      name={icon}
      onPress={toggleRepeatMode}
      color="#fff"
      {...iconProps}
    />
  );
};

export default RepeatToggle;
