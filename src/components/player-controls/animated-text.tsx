import { FC, useEffect } from "react";
import Animated, {
  Easing,
  StyleProps,
  cancelAnimation,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withTiming,
} from "react-native-reanimated";

type Props = {
  text: string;
  animationThreshold: number;
  style?: StyleProps;
};

const AnimatedText: FC<Props> = ({ text, animationThreshold, style }) => {
  const isShouldAnimate = text.length >= animationThreshold;
  const translateX = useSharedValue(0);
  const textWidth = text.length * 3;

  useEffect(() => {
    if (!isShouldAnimate) return;

    translateX.value = withDelay(
      1000,
      withRepeat(
        withTiming(-textWidth, { duration: 5000, easing: Easing.linear }),
        -1,
        true
      )
    );

    return () => {
      cancelAnimation(translateX);
      translateX.value = 0;
    };
  }, [isShouldAnimate, textWidth, translateX, text, animationThreshold]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
    };
  });

  return (
    <Animated.Text
      numberOfLines={1}
      style={[
        style,
        animatedStyle,
        isShouldAnimate && { width: 9999, paddingLeft: 16 },
      ]}
    >
      {text}
    </Animated.Text>
  );
};

export default AnimatedText;
