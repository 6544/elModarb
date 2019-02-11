import React,{Component} from'react';
import { View,Image,StyleSheet } from "react-native";
export const ImageLogo =(props)=>(
    <Image style={[styles.logo,props.style]} source={require("../assets/images/logo.png")}/>

) 
const styles=StyleSheet.create({
    logo:{
        width:'50%',
         height:'5%',
         flex:0.8,
         marginTop:'2%'
        
         
     }
})
