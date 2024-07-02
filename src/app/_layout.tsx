import { useLogPlayerState } from "@/hooks/use-log-player-state";
import { useSetupPlayer } from "@/hooks/use-setup-player";
import { SplashScreen, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useCallback } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
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
      <GestureHandlerRootView style={{ flex: 1 }}>
        <RootNavigation />
        <StatusBar style="auto" />
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
};

const RootNavigation = () => {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="player"
        options={{
          presentation: "card",
          gestureEnabled: true,
          gestureDirection: "vertical",
          animationDuration: 400,
          headerShown: false,
        }}
      />
    </Stack>
  );
};

export default App;
