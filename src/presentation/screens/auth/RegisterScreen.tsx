/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Button, Input, Layout,Text } from '@ui-kitten/components';
import { ScrollView, useWindowDimensions } from 'react-native';
import { MyIcon } from '../../../components/ui/MyIcon';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../../../types/Interfaces';

interface Props extends StackScreenProps<RootStackParams,'RegisterScreen'>{}

export const RegisterScreen = ({navigation}:Props) => {
  const { height } = useWindowDimensions();
  return (
    <Layout style={{flex:1}}>
      <ScrollView style={{marginHorizontal:40}}>

        <Layout style={{paddingTop:height * 0.30}} >
          <Text category="h1">Crear Cuenta</Text>
          <Text category="label">Porfavor,Ingrese para continuar</Text>
        </Layout>

        <Layout style={{marginTop:20}}>

          <Input
            placeholder="Nombre completo"
            style={{marginBottom:10}}
            accessoryLeft={<MyIcon name="person-outline"/>}
          />

          <Input
            placeholder="Email"
            autoCapitalize="none"
            keyboardType="email-address"
            style={{marginBottom:10}}
            accessoryLeft={<MyIcon name="email-outline"/>}
          />

          <Input
            placeholder="Contraseña"
            autoCapitalize="none"
            secureTextEntry
            style={{marginBottom:10}}
            accessoryLeft={<MyIcon name="lock-outline"/>}
          />

        </Layout>

        <Layout style={{marginTop:20}}>
          <Button accessoryRight={<MyIcon name="arrow-forward-outline" white/>} onPress={()=> {}}>
            Crear
          </Button>
        </Layout>

        <Layout style={{marginTop:20,flexDirection:'row',justifyContent:'center',alignItems:'flex-end'}}>
          <Text>¿Ya tienes una cuenta?</Text>
          <Text status="primary" category="s1" onPress={()=> navigation.goBack()}>Ingresar</Text>
        </Layout>

      </ScrollView>
    </Layout>
  );
};
