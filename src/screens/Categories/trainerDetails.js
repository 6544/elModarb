import React, { Component } from 'react';
import { Platform, View, StyleSheet, Text, FlatList, TouchableHighlight, ScrollView, Linking } from "react-native";
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
export default class TrainerDetails extends Component {

    mytrainer = null;
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
        this.SetTrainerObject(this.props.navigation.getParam("objectData"));

    }

    async SetTrainerObject(trainerChildren) {
        console.log(trainerChildren);
       // debugger;
        this.mytrainer = trainerChildren;
        if (LocalStorage.user) {
           // debugger;
            if (trainerChildren.id === LocalStorage.user.id) {
                let number = await new LocalStorage().getVisits();
                if (num !== -1) {
                    number++;
                    await new LocalStorage().setVisits({ id: trainerChildren.id, num: number });
                }
            }
        }

    }
    render() {
        //    if(this.myCenter.social.includes('facebook'))
        //    this.setState({facebook:true});
        //    if(this.myCenter.social.includes('telegram'))
        //    this.setState({telegram:true});
        //    if(this.myCenter.social.includes('snapchat'))
        //    this.setState({snapchat:true});
        //    if(this.myCenter.social.includes('twitter'))
        //    this.setState({twitter:true});
        //    if(this.myCenter.social.includes('youtube'))
        //    this.setState({youtube:true});
        //    if(this.myCenter.social.includes('whatsapp'))
        //    this.setState({whatsapp:true});
        //    if(this.myCenter.social.includes('linkedin'))
        //    this.setState({linkedin:true});
        //    if(this.myCenter.social.includes('instagram'))
        //    this.setState({instagram:true});
        return (
            <Container style={{ flex: 1 }}>
                <HeaderWithoutButtons page="Home" navigation={this.props.navigation} />
                {/* <ScrollView> */}
                <NewChanges />

                <View style={{ flex: 1 }}>
                    {/*  {/* height: '50%', ,top:-5  */}

                    <View style={{ backgroundColor: 'green', height: '40%' }}>

                        <Card transparent>
                            <CardItem style={{ justifyContent: 'center', backgroundColor: 'green' }}>
                                <Body style={{ alignItems: 'center',justifyContent:'center' }}>
                                    <Avatar image={this.mytrainer.image} page="details" />
                                </Body>
                            </CardItem>

                            <CardItem style={{ backgroundColor: 'green', height: '50%' }}>
                                <Body style={{ justifyContent: 'center', alignItems: 'center' }}>

                                    <AppText text={this.mytrainer.trainer.character} />
                                    <AppText text={this.mytrainer.name} />
                                    <AppText text={this.mytrainer.trainer.credit} />
                                    <AppText text={this.mytrainer.trainer_field.field} />
                                </Body>
                            </CardItem>

                            <CardItem style={{ alignSelf: 'center', backgroundColor: 'green', top: -20, height: '20%' }}>
                                <Body style={{ justifyContent: 'center', alignItems: 'center', height: '130%' }}>
                                    <AppText text="info@domain.com" />
                                    <AppText text="www.domain.com" />
                                </Body>
                            </CardItem>
                        </Card>
                    </View>

                    {/* height: '50%', */}
                    <View style={{ backgroundColor: 'cadetblue', height: '100%' }}>
                        <Card style={{ alignSelf: "center", width: '70%', height: '5%',bottom:12 }}>
                            <CardItem>
                                <Body style={{ alignSelf: 'center' }}>
                                    <Text style={{ color: 'black', alignSelf: 'center' }}>{localization.SOAcard}</Text>
                                </Body>
                            </CardItem>
                        </Card>
                        <Card transparent style={{ top: -25 }}>
                            <CardItem style={{ backgroundColor: 'cadetblue',height:'60%' }}>
                                <Body style={{height:'30%',justifyContent:'center',alignItems:'center'}}>
                                    <Text style={{ alignSelf: 'center' }}>
                                        {this.mytrainer.professional_card["card"]}
                                        
                                    </Text>
                                </Body>
                            </CardItem>

                            <CardItem style={{ backgroundColor: 'cadetblue' }} >
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
                        </Card>
                    </View>

                </View>

                {/* </ScrollView> */}
            </Container>
        )
    }
}
const styles = StyleSheet.create({
})