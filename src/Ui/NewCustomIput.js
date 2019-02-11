import {  Label, Input, Item } from "native-base";
import React,{Component} from 'react';

import { View,StyleSheet,Text,Modal ,ScrollView,Image} from "react-native";
import { AppText } from "./appText";
import { Colors } from "../assets/colors";

const RenderCustomInput=(props)=>{
    return(

        <View style={[{flexDirection:'row' ,width:'90%',alignSelf:'center'},props.containerStyle]}>
                   <Label style={[{backgroundColor:'orange',color:'white',flex:0.3, textAlign:'center',
                   textAlignVertical:'center'},props.style]}
                  >{props.label}</Label>
                   <Input onBlur={props.onBlur} secureTextEntry={props.secureTextEntry} underlineColorAndroid='transparent'   onChangeText={props.changeText} value={props.text}   style={[{ textAlign: 'center',fontSize:20,flex:0.7,backgroundColor:'white'},props.inputStyle]} placeholder={props.placeholder}/>
                   {props.meta.touched &&
    ((props.meta.error && <AppText style={{ color: Colors.red }} text={props.meta.error} />))}
                   </View>

    )
}
export default RenderCustomInput;



