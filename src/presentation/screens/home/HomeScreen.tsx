/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Layout,Text,Button,Icon } from '@ui-kitten/components';
import { useAuthStore } from '../../../store/auth/AuthStore';

export const HomeScreen = () => {
  const { logout } = useAuthStore();
  return (
    <Layout style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text>HomeScreen</Text>

      <Button onPress={logout} accessoryLeft={<Icon name="log-out-outline"/>}>Cerrar sesión</Button>
    </Layout>
  );
};
