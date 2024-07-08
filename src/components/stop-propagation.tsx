import { FC, PropsWithChildren } from "react";
import { View } from "react-native";

type Props = PropsWithChildren;

const StopPropagation: FC<Props> = ({ children }) => {
  return (
    <View
      onStartShouldSetResponder={() => true}
      onTouchEnd={(e) => e.stopPropagation()}
    >
      {children}
    </View>
  );
};

export default StopPropagation;
