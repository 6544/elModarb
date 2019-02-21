import React, { Component } from 'react';
import { Platform,View, StyleSheet, Text, FlatList, TouchableHighlight,ScrollView } from "react-native";
import { Container, Tab, Content, Icon, ListItem, Thumbnail, Left, Body, Right, Button, Card, CardItem, Image, Row } from 'native-base';
import localization from '../localization/localization';
import { HeaderWithoutButtons } from "../Ui/headerWithoutButtons";

import { AppText } from '../Ui/appText';
import { LocalStorage } from '../helpers/localStorage';
import { Colors } from '../assets/colors';

export class Statistics extends Component{
    state={visits:null}
    componentDidMount(){
        this.getVisitsNumber();
    }
    async getVisitsNumber() {
       // debugger;
        const num = await new LocalStorage().getVisits();
        let finalnum=-1;
           // debugger;
            console.log(num+" number");
            if(num===-1)
            finalnum=0;
            else
            finalnum=num;
            this.setState(
                {
                    visits: (<AppText text={localization.appearedSearch + " " + finalnum} />
                    )
                })

    }
    render(){
        return(
            <Container style={{ flex: 1,backgroundColor:Colors.lightBlue }}>
            <HeaderWithoutButtons page="Home" navigation={this.props.navigation} />
            <Content contentContainerStyle={{flex:1,justifyContent:'center',alignItems:'center'}}>
            {this.state.visits}
            </Content>
            </Container>
        )
    }
}