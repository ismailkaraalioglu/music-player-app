import { useLogPlayerState } from "@/hooks/use-log-player-state";
import { useSetupPlayer } from "@/hooks/use-setup-player";
import { SplashScreen, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useCallback } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import "../styles/global.css";

SplashScreen.preventAutoHideAsync();

const App = () => {
  const handlePlayerLoaded = useCallback(() => {
    SplashScreen.hideAsync();
  }, []);

  useSetupPlayer({
    onLoad: handlePlayerLoaded,
  });

  useLogPlayerState();

  return (
    <SafeAreaProvider>
      <RootNavigation />
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
};

const RootNavigation = () => {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
};

export default App;
