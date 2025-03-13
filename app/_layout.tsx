import { Stack } from "expo-router";
import headerOptions from "../constants/headerOptions";

import { StatusBar } from 'expo-status-bar';
import { LogBox } from "react-native";

LogBox.ignoreAllLogs(true);

export default function RootLayout() {
  return(
    <>
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
    </>
  ); 
}