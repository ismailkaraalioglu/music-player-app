import { useEffect, useState } from "react";
import { getColors } from "react-native-image-colors";
import { IOSImageColors } from "react-native-image-colors/build/types";

export const usePlayerBackground = (imageUrl: string) => {
  const [imageColor, setImageColor] = useState<IOSImageColors | null>(null);

  useEffect(() => {
    getColors(imageUrl, {
      key: imageUrl,
      fallback: "#000",
      cache: true,
    }).then((colors) => setImageColor(colors as IOSImageColors));
  }, [imageUrl]);

  return { imageColor };
};
