import { useCallback, useEffect, useState } from "react";
import TrackPlayer from "react-native-track-player";

export const usePlayerVolume = () => {
  const [volume, setVolume] = useState<number | undefined>(undefined);

  const getVolume = useCallback(async () => {
    const currentVolume = await TrackPlayer.getVolume();
    setVolume(currentVolume);
  }, []);

  const updateVolume = useCallback(async (newValue: number) => {
    if (newValue < 0 || newValue > 1) return;
    setVolume(newValue);
    await TrackPlayer.setVolume(newValue);
  }, []);

  useEffect(() => {
    getVolume();
  }, [getVolume]);

  return { volume, updateVolume };
};
