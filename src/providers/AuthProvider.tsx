/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React,{ PropsWithChildren,useEffect } from 'react';
import { RootStackParams } from '../Interfaces/Interfaces';
import { useAuthStore } from '../store/auth/AuthStore';

export const AuthProvider = ({children}:PropsWithChildren) => {
    const navigation = useNavigation<StackNavigationProp<RootStackParams>>();
    const { status,checkStatus } = useAuthStore();

    useEffect(()=>{
        checkStatus();
    },[]);

    useEffect(()=>{
        if(status !== 'check'){
            if (status === 'authenticated') {
                navigation.reset({index:0,routes:[{name:'HomeScreen'}]});
            }else{
                navigation.reset({index:0,routes:[{name:'LoginScreen'}]});
            }
        }
    },[status]);

  return (
    <>
        {children}
    </>
  );
};
