import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native'
import HomeView from './src/views/HomeView';
import ListView from './src/views/ListView';


export default function App() {

  const Stack = createNativeStackNavigator();

  const config = {
      animation: 'spring',
      config: {
      stiffness: 1000,
      damping: 500,
      mass: 3,
      overshootClamping: true,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    },
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions = {{

        // colores par el stack navigator 
        headerStyle:{
            backgroundColor: '#000',
        },
        headerTintColor: 'rgb(162, 154, 245)',
      }}>
        <Stack.Screen cardStyle={{ backgroundColor: 'transparent' }} name="home" component={HomeView} options={{title:"MENU PRINCIPAL"}} />
        <Stack.Screen name="list" component={ListView} options={{title:"LISTA DE CARTAS",
        transitionSpec: {
            open: config,
            close: config,
          },}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSide: 100,
    color: 'red',
    marginBottom: 10
  },
  tarea: {
    fontSide: 60,
    color: 'blue',
    marginBottom: 10
  },
  containerBasic: {
    position: 'absolute',
    top: 20,
    right: 500
  }
});

