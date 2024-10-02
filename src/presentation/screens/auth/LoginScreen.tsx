/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Layout,Text,Input,Button } from '@ui-kitten/components';
import { useWindowDimensions,ScrollView } from 'react-native';
import { MyIcon } from '../../../components/ui/MyIcon';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../../../Interfaces/Interfaces';
import { API_URL_ANDROID } from '@env';


interface Props extends StackScreenProps<RootStackParams,'LoginScreen'>{}

export const LoginScreen = ({navigation}:Props) => {
  const { height } = useWindowDimensions();
  console.log(height);
  console.log(API_URL_ANDROID);

  return (
    <Layout style={{flex:1}}>
      <ScrollView style={{marginHorizontal:40}}>

        <Layout style={{paddingTop:height * 0.35}} >
          <Text category="h1">Ingresar</Text>
          <Text category="label">Porfavor,Ingrese para continuar</Text>
        </Layout>

        <Layout style={{marginTop:20}}>

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
            Ingresar
          </Button>
        </Layout>

        <Layout style={{marginTop:20,flexDirection:'row',justifyContent:'center',alignItems:'flex-end'}}>
          <Text>¿No tienes cuenta?</Text>
          <Text status="primary" category="s1" onPress={()=> navigation.navigate('RegisterScreen')}>Registrate</Text>
        </Layout>

      </ScrollView>
    </Layout>
  );
};
