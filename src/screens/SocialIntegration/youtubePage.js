import React,{Component} from 'react';
import { View } from "react-native";
import { Container, Content } from 'native-base';
import { HeaderScreen } from "../../Ui/Header";
import { Colors } from '../../assets/colors';

export class YoutubePage extends Component{
    render(){
        return(
            <Container style={{flex:1,backgroundColor:Colors.lightBlue}}>
                <HeaderScreen/>
                <Content contentContainerStyle={{justifyContent:'center',alignItems:'center'}}>
                    <CustomInput/>
                </Content>
            </Container>
        )
    }
        
    
}