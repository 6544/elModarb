import React,{Component} from 'react';
import { View,StyleSheet,Text,Modal } from "react-native";
import { Icon, Left, Right, Container,TouchableHighlight, Content, Header, Body, Title } from 'native-base';
import localization from '../../localization/localization';

export default class VisitorRegistrationSuccess extends Component{
    render(){
       
        return(
          <View style={{
               width: 150,
            height: 150,top:20
          }}>
        <Text style={{textAlign:'center',
        textAlignVertical:'center',overflow:'visible',
            flexWrap:'wrap'}} numberOfLines={5}>
            {localization.RegisterSuccessVisitor}
            </Text>
            <Text style={{textAlign:'center',textAlignVertical:'center'}}>
            {localization.management}
            </Text>
        </View>
        )
    }
}
const styles=StyleSheet.create({
   
})