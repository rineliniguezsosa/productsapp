import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParams } from '../types/Interfaces';
import { HomeScreen,LoginScreen,RegisterScreen,LoadingScreen,ProductScreen } from '../presentation/screens';

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
        screenOptions={{
            headerShown:false,
        }}
    >
    <Stack.Screen name="HomeScreen" component={HomeScreen} />
    <Stack.Screen name="LoginScreen" component={LoginScreen} />
    <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
    <Stack.Screen name="LoadingScreen" component={LoadingScreen} />
    <Stack.Screen name="ProductScreen" component={ProductScreen} />
  </Stack.Navigator>
  );
};
