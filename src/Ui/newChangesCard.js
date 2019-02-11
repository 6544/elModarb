import React,{Component} from 'react';
import { Card, CardItem, Body, Text } from "native-base";

export const  NewChanges = () => {
    return (
        <Card>
        <CardItem>
            <Body>
                <Text style={{textAlign:'center',alignSelf:'center',flex:1,color:'darkred',backgroundColor:'white'}}>
        {localization.NewChanges}
                </Text>
            </Body>
        </CardItem>
        </Card>
    );
}



