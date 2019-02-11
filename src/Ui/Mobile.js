import {  Label, Input } from "native-base";
import React,{Component} from 'react';

import { View,StyleSheet,Text,Modal ,ScrollView,Image} from "react-native";

const Mobile=(props)=>{
    return(
        <View style={[{flexDirection:'row' ,width:'90%',alignSelf:'center'},props.containerStyle]}>
                   <Label style={[{backgroundColor:'orange',color:'white',flex:0.3, 
                   textAlign:'center',textAlignVertical:'center'},props.style]}
                  >{props.label}</Label>
                   <Input placeholder={props.placeholder} value={props.value} onChangeText={props.changeText}   style={{ textAlign: 'center',fontSize:20,flex:0.5,backgroundColor:'white'}}/>
                   <Label style={[{backgroundColor:'gray',color:'white',flex:0.2, textAlign:'center',textAlignVertical:'center'},props.style]}
                  >{props.mobileExtension}</Label>
                   </View>
    )
}
export default Mobile;



