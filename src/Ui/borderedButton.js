import React from 'react';
import { StyleSheet,Text } from "react-native";
import { Colors } from '../assets/colors';
import { Button } from 'native-base';
import { AppText } from './appText';

export const BorderedButton=(props)=>(
    <Button onPress={props.onPress} style={props.style}>
    <AppText text={props.text}/>
    </Button>
)