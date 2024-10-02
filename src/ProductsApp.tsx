import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './navigation/StackNavigator';
import * as eva from '@eva-design/eva';
import { ApplicationProvider,IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

export const ProductsApp = () => {
  return (
      <>
        <IconRegistry icons={EvaIconsPack} />
        <ApplicationProvider  {...eva} theme={eva.light}>
          <NavigationContainer>
            <StackNavigator/>
          </NavigationContainer>
        </ApplicationProvider>
      </>
  );
};
