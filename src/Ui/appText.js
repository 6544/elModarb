import React,{Component} from 'react';
import { Text,StyleSheet } from "react-native";
import { Colors } from '../assets/colors';

export const AppText=(props)=>{
        return(
            <Text style={[props.style,styles.text]}>{props.text}</Text>
        )  
}
const styles=StyleSheet.create({
    text:{
      //  color:Colors.black,
        fontSize:15,
        textAlign:'center',
        flex:1
    }
})