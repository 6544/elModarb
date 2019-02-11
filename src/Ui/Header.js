import React, { Component } from 'react';
import { View, StyleSheet, Text,Platform } from "react-native";
import { Icon, Left, Right, Button, Header, Container } from 'native-base';
import { Colors } from '../assets/colors';
import { ImageLogo } from './imageLogo';

export const HeaderScreen = (props) => (

    <Header  {...props} style={[props.style, styles.header]}>
        <View style={{ flex: 0.55, height: '120%' }}>

            <ImageLogo style={styles.imagelogo}

            />
            <Text
                style={{ fontSize: 10, color: Colors.white, margin: '2%', alignSelf: 'flex-start' }}
            >Al-Modarreb Al-Arrabi</Text>
        </View>
      
        <Right>

            <Button transparent>
                <Icon name="search" style={{ color: Colors.white }}
                    onPress={
                        () => props.navigation.navigate('search')
                    }
                />
            </Button>
            <Button onPress={() => {
                props.navigation.toggleDrawer()
            }} transparent>
                <Icon name="menu" style={{ color: Colors.white }} />
            </Button>

        </Right>
    </Header>
)

const styles = StyleSheet.create({
    header: {
        backgroundColor: Colors.lightBlue
    },
    imagelogo: {
        
        marginTop: '4%',
        resizeMode:'cover',
        width: Platform.OS == 'ios' ? '50%' : '85%',
    }
})