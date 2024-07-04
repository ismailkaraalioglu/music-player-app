import { useLogPlayerState } from "@/hooks/use-log-player-state";
import { useSetupPlayer } from "@/hooks/use-setup-player";
import { store } from "@/stores/store";
import { SplashScreen, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useCallback } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
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
    </Stack>
  );
};

export default App;
