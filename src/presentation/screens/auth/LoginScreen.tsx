/* eslint-disable react-native/no-inline-styles */
import React,{ useState } from 'react';
import { Layout,Text,Input,Button } from '@ui-kitten/components';
import { useWindowDimensions,ScrollView, Alert } from 'react-native';
import { MyIcon } from '../../../components/ui/MyIcon';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../../../Interfaces/Interfaces';
import { API_URL_ANDROID } from '@env';
import { useForm } from '../../../hooks/useForm';
import { useAuthStore } from '../../../store/auth/AuthStore';


interface Props extends StackScreenProps<RootStackParams,'LoginScreen'>{}

export const LoginScreen = ({navigation}:Props) => {
  const { height } = useWindowDimensions();
  const [isposting, setIsposting] = useState(false);
  const { login } = useAuthStore();
  const {form,handleChange} = useForm({
    email:'',
    password:'',
  });
  console.log(height);
  console.log(API_URL_ANDROID);

  const onLogin = async() => {
    if(form.email.length === 0 || form.password.length === 0){
      return;
    }
    setIsposting(true);
    const responseApi = await login(form.email,form.password);
    console.log('responseApi: ',responseApi);

    setIsposting(false);

    if(responseApi) {return;}

    Alert.alert('Usuario ó contraseña incorrectos');
  };

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
            value={form.email}
            accessoryLeft={<MyIcon name="email-outline"/>}
            onChangeText={(text)=> handleChange('email',text)}
          />
          <Input
            placeholder="Contraseña"
            autoCapitalize="none"
            secureTextEntry
            value={form.password}
            onChangeText={(text)=> handleChange('password',text)}
            style={{marginBottom:10}}
            accessoryLeft={<MyIcon name="lock-outline"/>}
          />

        </Layout>
        <Text>{JSON.stringify(form.email)}</Text>
        <Layout style={{marginTop:20}}>
          <Button disabled={isposting} accessoryRight={<MyIcon name="arrow-forward-outline" white/>} onPress={()=> onLogin}>
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
