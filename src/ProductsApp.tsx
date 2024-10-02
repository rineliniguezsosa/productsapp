import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './navigation/StackNavigator';
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';

export const ProductsApp = () => {
  return (
    <ApplicationProvider  {...eva} theme={eva.light}>
      <NavigationContainer>
        <StackNavigator/>
      </NavigationContainer>
    </ApplicationProvider>
  );
};
