import React,{Component} from 'react';
import { View,StyleSheet,Text,Modal } from "react-native";
import { Icon, Left, Right, Container,TouchableHighlight, Content, Header, Body, Title } from 'native-base';

export default class CenterRegistrationSuccess extends Component{
    render(){
        return(
          <View style={{
            width: 150,
            height: 150,top:20}}>
        <Text style={{textAlign:'center',textAlignVertical:'center',overflow:'visible',
            flexWrap:'wrap'}} numberOfLines={5}>
            المكرمين السادة معهد ظ مركز التدريب - الاستشارات 
            حفظك الله ترحب بكم 
            أدارة مجموعة المدرب العربى الدولية - لبنان 
            نشكركم على انضمامكم لتطبيق "المدرب العربى" 
            نأمل منكم مراجعة بريدكم الاكترونى لتفعيل حسابكم
             فى التطبيق و الاستفادة من خدماته أهلا وسهلا بكم 
            </Text>
            <Text style={{textAlign:'center',textAlignVertical:'center'}}>
            الادارة 
            </Text>
        </View>
        )
    }
}
const styles=StyleSheet.create({
   
})