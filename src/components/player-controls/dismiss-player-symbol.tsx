import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const DismissPlayerSymbol = () => {
  const { top } = useSafeAreaInsets();

  return (
    <View
      className="absolute left-0 right-0 flex-row justify-center"
      style={{ top: top + 8 }}
    >
      <View
        accessible={false}
        className="w-14 h-2 rounded-lg bg-white opacity-70"
      />
    </View>
  );
};

export default DismissPlayerSymbol;
