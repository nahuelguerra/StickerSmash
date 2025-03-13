import { Tabs} from "expo-router";
import { Ionicons } from '@expo/vector-icons'; // Para iconos
import { StatusBar } from 'expo-status-bar';
import React from "react";

export default function TabsLayout() {
  return(
    <>
    <Tabs screenOptions={{
        headerShown: false,
        // Estilos para la TabBar (parte inferior)
        tabBarStyle: {
          backgroundColor: '#191919', // Mismo color que tu StatusBar
          height: 60,
          paddingBottom: 10,
          paddingTop: 5,
          // Para eliminar la sombra/línea superior:
          elevation: 0,
          shadowOpacity: 0,
          borderTopWidth: 0,
        },
        // Color de los iconos/texto cuando están activos
        tabBarActiveTintColor: 'rgb(104, 252, 195)',
        // Color de los iconos/texto cuando están inactivos
        tabBarInactiveTintColor: 'white',
        // Estilo para la etiqueta de texto
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: 'bold',
        },
      }}>
      <Tabs.Screen 
        name="index" 
        options={{
          tabBarLabel: "Inicio",
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name={focused ? 'home' : 'home-outline'} size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen 
        name="about" 
        options={{
          tabBarLabel: "Acerca de",
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name= {focused ? 'information-circle' : 'information-circle-outline'} size={size} color={color} />
          ),
        }}
      />
    </Tabs>
    </>
  ); 
}