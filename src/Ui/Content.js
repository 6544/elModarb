import React, { Component } from 'react';
import { StyleSheet, Text, FlatList, TouchableHighlight ,TouchableOpacity,View} from "react-native";

import { Card, CardItem, Body, Content, Right, Button, Thumbnail, Left, Container, Icon } from "native-base";
import { NewChanges } from './newChangesCard';
import { AppText } from './appText';
import { CustomButton } from './customButon';
import { Colors } from '../assets/colors';

import { Avatar } from './avatar';
import { LocalStorage } from '../helpers/localStorage';
const uri = "https://facebook.github.io/react-native/docs/assets/favicon.png";

export const ContentData = (props) => {
    debugger;
    return (

        <FlatList data={props.data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={
            ({ item }) => (
                
                
                <Card key={item.id} style={{ flex: 0.3 }} >
                        <CardItem>
                            <Avatar image={item.image}/>
                            <Body style={{flex:1,justifyContent:'center',alignItems:'center'}}>

                            <AppText text={item.name} />
                            <AppText text={item.hasOwnProperty("trainer")?item.trainer.character:item.center.character}/>
                            <AppText text={item.hasOwnProperty("trainer_field")?item.trainer_field.field:item.center_fields[0].field}/>
                           
                            </Body>
                            <Left style={{flex:0.25}}>
                                <CustomButton
                                    onPress={() => {
                                       if(LocalStorage.user){
                                        props.navigation.push(props.navigationObject, { objectData: item })
                                       }
                                       else{
                                           props.navigation.navigate('Welcome');
                                       }
                                    }}
                                    style={{ height: '60%', width: '100%', right: 20, backgroundColor: Colors.red }} text={localization.more} />


                            </Left>


                            {/* <FastImage
                                //style={styles.image}
                                source={{
                                    uri: 
                                    `http://modarrebarabi.sailaway-eg.com/api/${uri}`,
                                    headers: { Authorization: 'someAuthToken' },
                                    priority: FastImage.priority.normal,
                                }}
                                resizeMode={FastImage.resizeMode.contain}
                                /> */}
                           

                          
                   
                         
                         

                            </CardItem>
                    </Card >

                )
            }
        />

    );
}



