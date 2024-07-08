import { useLogPlayerState } from "@/hooks/use-log-player-state";
import { useSetupPlayer } from "@/hooks/use-setup-player";
import { playbackService } from "@/lib/playback-service";
import { store } from "@/stores/store";
import { SplashScreen, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useCallback } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import TrackPlayer from "react-native-track-player";
import { Provider } from "react-redux";
import "../../global.css";

SplashScreen.preventAutoHideAsync();

TrackPlayer.registerPlaybackService(() => playbackService);

const App = () => {
  const handlePlayerLoaded = useCallback(() => {
    SplashScreen.hideAsync();
  }, []);

  useSetupPlayer({
    onLoad: handlePlayerLoaded,
  });

  useLogPlayerState();

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <RootNavigation />
          <StatusBar style="auto" />
        </GestureHandlerRootView>
      </SafeAreaProvider>
    </Provider>
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
      <Stack.Screen
        name="(modals)/add-to-playlist"
        options={{
          presentation: "modal",
          headerStyle: { backgroundColor: "#000" },
          headerTitle: "Add to playlist",
          headerTitleStyle: { color: "#fff" },
        }}
      />
    </Stack>
  );
};

export default App;
