/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Layout,Text,Button,Icon } from '@ui-kitten/components';

export const HomeScreen = () => {
  return (
    <Layout style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text>HomeScreen</Text>

      <Button accessoryLeft={<Icon name="facebook"/>}>Hola</Button>
    </Layout>
  );
};
