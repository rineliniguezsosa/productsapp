import React from 'react';
import { Icon,useTheme } from '@ui-kitten/components';
import { MyIconProps } from '../../types/Interfaces';
import { StyleSheet } from 'react-native';

export const MyIcon = ({name,color,white}:MyIconProps) => {
    const theme = useTheme();

    if (white) {
        color = theme['color-info-100'];
    } else if (!color){
        color = theme['text-basic-color'];
    }else {
        color = theme[color];
    }
  return (
    <Icon name={name} fill={color} style={styles.icon}/>
  );
};

const styles = StyleSheet.create({
    icon:{
        width:32,
        height:32,
    },
});
