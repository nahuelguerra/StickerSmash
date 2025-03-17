import { Stack } from "expo-router";
import headerOptions from "../constants/headerOptions";
import { StatusBar } from 'expo-status-bar';
import { LogBox } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

if (__DEV__) {
}

LogBox.ignoreAllLogs(true);

export default function RootLayout() {
  return(
    <GestureHandlerRootView>
    <StatusBar 
      style="light" 
      backgroundColor="#191919" 
      translucent={false}
      hidden= {false}
    />
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen 
        name="(tabs)" 
        options={{
          ...headerOptions,
          headerTitle: "Home"  // Título específico para la pantalla de inicio
        }}
      />
    </Stack>
    </GestureHandlerRootView>
  ); 
}