import React,{Component} from 'react';
import { View,StyleSheet,Text } from "react-native";
import { Icon, Left, Right, Container, Content, Header, Body, Title } from 'native-base';
import { HeaderScreen} from '../Ui/Header';
import TabsList from './Categories/Tabs';

export default class Home extends Component{
  
    render(){
        return(
          <Container style={{flex:1}}>
           <HeaderScreen hasTabs={true}  navigation={this.props.navigation} hasTabs={true}/>
  
            <TabsList navigation={this.props.navigation}/>
          </Container>
        )
    }
}
const styles=StyleSheet.create({
   
})