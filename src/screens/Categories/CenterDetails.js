import React, { Component } from 'react';
import { View, StyleSheet, Text, FlatList, TouchableHighlight } from "react-native";
import { Container, Tab, Content, Icon, ListItem, Thumbnail, Left, Body, Right, Button, Card, CardItem, Image, Row } from 'native-base';
import { HeaderScreen } from '../../Ui/Header';
import localization from '../../localization/localization';
import { Colors } from '../../assets/colors';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { NewChanges } from '../../Ui/newChangesCard';
import { HeaderWithoutButtons } from '../../Ui/headerWithoutButtons';
import { AppText } from '../../Ui/appText';
import { LocalStorage } from '../../helpers/localStorage';
import { Avatar } from '../../Ui/avatar';

const dataArray = [{ key: 'a' }, { key: 'b' }];
const uri = "https://facebook.github.io/react-native/docs/assets/favicon.png";
export default class CenterDetails extends Component {
    myCenter = null;
    constructor(props) {
        
        super(props);
        this.state = {
            facebook: true,
            telegram: true,
            snapchat: true,
            twitter: true,
            youtube: true,
            whatsapp: false,
            linkedin: true,
            instagram: true

        };
        this.SetCenterObject(this.props.navigation.getParam('objectData'));
    }

   async SetCenterObject(centerChildren) {
        
        console.log(centerChildren);
        this.myCenter = centerChildren;
        if(LocalStorage.user){
           // debugger;
        if(centerChildren.id===LocalStorage.user.id){
           let number= await new LocalStorage().getVisits();
          // debugger;
           if(num!==-1)
           {
               number++;
       await new LocalStorage().setVisits({id:centerChildren.id,num:number});
           }
        }
        }
    }
    render() {
        return (
            <Container style={{ flex: 1 }}>
                <HeaderWithoutButtons page="Home" navigation={this.props.navigation} />
                {/* <Content> */}
                    <NewChanges />
                    <View style={{flex:1}}>
                        <View style={{ height: '45%', backgroundColor: 'red' }}>

                            <Card transparent>
                                <CardItem style={{ justifyContent: 'center', backgroundColor: 'red' }}>
                                    <Body style={{alignItems:'center'}}>
                                        {/* change */}
                                        <Avatar image={this.myCenter.image} page="Details"/>

                                        {/* <Thumbnail style={{ alignSelf: 'center' }} large circle source={{ uri: uri }} /> */}
                                    </Body>
                                </CardItem>

                                <CardItem style={{ backgroundColor: 'red',height:'50%' }}>
                                    <Body style={{justifyContent:'center',alignItems:'center'}}>
                                        <AppText text={this.myCenter.name} />
                                        <AppText text={this.myCenter.center.manager} />

                                        <AppText text={this.myCenter.center_fields.field} />
                                        {/* {this.myCenter.center_fields.map((item,key)=>(
                                    <Text key={key} style={styles.TextStyle}> { item.field} </Text>
                                ))} */}

                                    </Body>
                                </CardItem>

                                <CardItem style={{ alignSelf: 'center', backgroundColor: 'red',height:'20%',top:-20 }}>
                                    <Body style={{ justifyContent: 'center', alignItems: 'center', height: '130%' }}>
                                        <AppText text="info@domain.com"/>
                                         <AppText text="www.domain.com"/>
                                    </Body>
                                </CardItem>
                            </Card>
                        </View>


                        <View style={{flex:1, height: '10%', backgroundColor: 'darkred' }}>
                            <Card style={{ alignSelf: "center", width: '70%', top: -25 }}>
                                <CardItem>
                                    <Body style={{ alignSelf: 'center' }}>
                                        <Text style={{ color: 'black', alignSelf: 'center' }}>{localization.SOAcard}</Text>
                                    </Body>
                                </CardItem>
                            </Card>
                            <Card transparent style={{ top: -25 }}>
                                <CardItem style={{ backgroundColor: 'darkred' }}>
                                    <Body style={{}}>
                                        <Text style={{ alignSelf: 'center' }}>
                                            {/* change */}
                                            {this.myCenter.professional_card["card"]}

                                        </Text>
                                    </Body>
                                </CardItem>

                                <CardItem style={{ backgroundColor: 'darkred',height:'60%' }}>
                                    <Body style={{}}>
                                        <Text style={{ alignContent: 'flex-start' }}> 1-{localization.Administrativeandfinancialtraining}</Text>
                                        <Text style={{ alignContent: 'flex-start' }}> 2-{localization.OccupationalSafetyandHealth}</Text>
                                    </Body>
                                </CardItem>

                                <CardItem style={{ backgroundColor: 'darkred' }} >
                                <Body style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-around', flexWrap: 'wrap' }}>
                                    <FontAwesome name='facebook-square' style={{
                                        display: this.state.facebook ? "flex" : "none",
                                        flex: 0.3,
                                        textDecorationStyle: 'solid',
                                    }} size={40} color={Colors.blue}
                                        onPress={() => {
                                            //check if he has fb then redirect else toast
                                           // debugger;
                                            Linking.canOpenURL("https://www.facebook.com/christine.g.william.1").then(supported => {
                                                if (!supported) {
                                                    alert('Can\'t redirect to this url: ' + "https://www.facebook.com/christine.g.william.1");
                                                } else {
                                                    return Linking.openURL("https://www.facebook.com/christine.g.william.1");
                                                }
                                            }).catch(err => alert('Can\'t Redirect to this url ', err));
                                        }} />
                                    <FontAwesome name='instagram' style={{
                                        display: this.state.instagram ? "flex" : "none",
                                        flex: 0.3,

                                    }} size={40} onPress={() => {
                                        //check if he has fb then redirect else toast
                                       // debugger;
                                        Linking.canOpenURL("https://www.instagram.com/christinewilliam/").then(supported => {
                                            if (!supported) {
                                                alert('Can\'t redirect to this url: ' + "https://www.instagram.com/christinewilliam/");
                                            } else {
                                                return Linking.openURL("https://www.instagram.com/christinewilliam/");
                                            }
                                        }).catch(err => alert('Can\'t Redirect to this url ', err));
                                    }} />
                                    <FontAwesome name='twitter-square' style={{
                                        display: this.state.twitter ? "flex" : "none",
                                        flex: 0.3,

                                    }} size={35} color={Colors.lightBlue}
                                        onPress={() => {
                                            //check if he has fb then redirect else toast
                                           // debugger;
                                            Linking.canOpenURL("https://twitter.com/Kokygeorge").then(supported => {
                                                if (!supported) {
                                                    alert('Can\'t redirect to this url: ' + "https://twitter.com/Kokygeorge");
                                                } else {
                                                    return Linking.openURL("https://twitter.com/Kokygeorge");
                                                }
                                            }).catch(err => alert('Can\'t Redirect to this url ', err));
                                        }} />
                                    <FontAwesome name='linkedin-square' style={{
                                        display: this.state.linkedin ? "flex" : "none",
                                        flex: 0.3,

                                    }} size={35} color={Colors.blue}
                                        onPress={() => {
                                            //check if he has fb then redirect else toast
                                           // debugger;
                                            Linking.canOpenURL("https://www.linkedin.com/in/christina-george-william/").then(supported => {
                                                if (!supported) {
                                                    alert('Can\'t handle url: ' + "https://www.linkedin.com/in/christina-george-william/");
                                                } else {
                                                    return Linking.openURL("https://www.linkedin.com/in/christina-george-william/");
                                                }
                                            }).catch(err => alert('Can\'t Redirect to this url ', err));
                                        }} />
                                    <FontAwesome name='snapchat-ghost' style={{
                                        display: this.state.snapchat ? "flex" : "none",
                                        flex: 0.3,

                                    }} size={35} color="yellow"
                                        onPress={() => {
                                            //check if he has fb then redirect else toast
                                           // debugger;
                                            Linking.canOpenURL("https://www.linkedin.com/in/christina-george-william/").then(supputubeorted => {
                                                if (!supported) {
                                                    alert('Can\'t handle url: ' + "https://www.linkedin.com/in/christina-george-william/");
                                                } else {
                                                    return Linking.openURL("https://www.linkedin.com/in/christina-george-william/");
                                                }
                                            }).catch(err => alert('Can\'t Redirect to this url ', err));
                                        }} />

                                    <FontAwesome name='youtube-play' style={{
                                        display: this.state.youtube ? "flex" : "none",
                                        flex: 0.3,

                                    }} size={35} color="red"
                                        onPress={() => {
                                            //check if he has fb then redirect else toast
                                           // debugger;
                                            Linking.canOpenURL("https://www.youtube.com/").then(supported => {
                                                if (!supported) {
                                                    alert('Can\'t handle url: ' + "https://www.youtube.com/");
                                                } else {
                                                    return Linking.openURL("https://www.youtube.com/");
                                                }
                                            }).catch(err => alert('Can\'t Redirect to this url ', err));
                                        }} />


                                </Body>
                            </CardItem>
                                    {/* <Body style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-around' }}>
                                        <FontAwesome name='facebook-square' size={40} color={Colors.blue} />
                                        <FontAwesome name='instagram' size={40} />
                                        <FontAwesome name='whatsapp' size={40} color="green" />
                                        <FontAwesome name='twitter-square' size={35} color={Colors.lightBlue} />
                                        <FontAwesome name='linkedin-square' size={35} color={Colors.blue} />
                                    </Body>
                                </CardItem> */}
                            </Card>
                        </View>
                    </View>

                {/* </Content> */}
            </Container>

        )
    }
}
const styles = StyleSheet.create({
})