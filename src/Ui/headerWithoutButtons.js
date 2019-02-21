import React from 'react';
import { Header, Left, Right, Button, Icon, Body } from 'native-base';
import { StyleSheet, Text, View } from "react-native";
import { ImageLogo } from './imageLogo';
import { Colors } from '../assets/colors';
import { Platform } from "react-native";

export const HeaderWithoutButtons = (props) => (
    <Header style={[styles.header]}>
        {/* <Left> */}
            <View style={{flex:0.55,height:'120%'}}>

                <ImageLogo style={styles.imagelogo}
                
                />
                <Text
                    style={{ fontSize: 10, color: Colors.white,margin:'2%',alignSelf:'flex-start'}}
                >Al-Modarreb Al-Arrabi</Text>
            </View>


        {/* </Left> */}
        <Right>
            <Icon name='arrow-back' style={{ color: Colors.white }}
                onPress={
                    () => {
                       // debugger;
                        props.navigation.pop();
                    }

                }
            />
        </Right>
    </Header>
)

const styles = StyleSheet.create({
    header: {
        backgroundColor: Colors.lightBlue,

    },
    imagelogo: {
        
        marginTop: '4%',
        resizeMode:'cover',
        width: Platform.OS == 'ios' ? '50%' : '85%',
    }

})