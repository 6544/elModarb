import React, { Component } from "react";
import { Container, Content, Card, CardItem, Left, Switch, ListItem, Right, List, Icon } from "native-base";
import { Text, View, StyleSheet } from "react-native";
import { HeaderWithoutButtons } from "../Ui/headerWithoutButtons";
import localization from "../localization/localization";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { Colors } from "../assets/colors";
import { socialIntegrationRequest } from "../store/Actions/actions/socialIntegration";
import { connect } from "react-redux";
import { LocalStorage } from "../helpers/localStorage";
//import InstagramLogin from "react-native-instagram-login";
//import LinkedInModal from 'react-native-linkedin';
import Toast, { DURATION } from "react-native-easy-toast";
import Dialog from "react-native-dialog";

class SocialMedia extends Component {
    // socialMedia;
    localStorage = new LocalStorage();
    state = {
        socialF: false, socialL: false,
        socialI: false, socialW: true,
        socialT: false, socialS: false,
        socialTele:false,
        socialY: false,
        dialog: false, title: ""
        , socialLink: null, socialLetter: null
    }
    firstLoad = true;

    constructor(props) {
        super(props);
        this.getSocialMedia();

    }
    handleCancel = () => {
        this.cancelSwitch();
    }

    handleConfirm = async () => {
      //  this.handleCancel();
      this.setState({
          dialog:false
      })
      await this.localStorage.setUserSocial(this.state.socialLetter,true);
        this.props.addSocial({
            id: LocalStorage.user.id,
            token: LocalStorage.user.token,
            letter: this.state.socialLetter,
            url: this.state.socialLink
        });


    }
    cancelSwitch(){
        switch(this.state.socialLetter){
            case "f":
            this.setState({socialF:false,dialog: false });
            break;
            case "t":
            this.setState({socialT:false,dialog: false });
            break;
            case "m":
            this.setState({socialTele:false,dialog: false });
            break;
            case "i":
            this.setState({socialI:false,dialog: false });
            break;
            case "l":
            this.setState({socialL:false,dialog: false });
            break;
            case "s":
            this.setState({socialS:false,dialog: false });
            break;
            case "y":
            this.setState({socialY:false,dialog: false});
            break;
            default:
            return;
        }
    }
    showDialog() {
        return (
            <Dialog.Container visible={this.state.dialog}>
                <Dialog.Title>{localization.SocialMedia}</Dialog.Title>
                <Dialog.Description>{this.state.title}</Dialog.Description>
                <Dialog.Input
                style={{borderColor:Colors.black,borderWidth:1}}
                    value={this.state.socialLink}
                    onChangeText={(text) => this.setState({ socialLink: text })}
                />
                <Dialog.Button label={localization.cancel} onPress={this.handleCancel} />
                <Dialog.Button label={localization.send} onPress={this.handleConfirm} />
            </Dialog.Container>
        )

    }

    async getSocialMedia() {    
        debugger;

        const facebookSocial = await this.localStorage.getUserSocial("f");
        facebookSocial ? this.state.socialF = true : null;
        const twitterSocial = await this.localStorage.getUserSocial("t");
        twitterSocial ? this.state.socialT = true : null;
        const youtubeSocial = await this.localStorage.getUserSocial("y");
        youtubeSocial ? this.state.socialy = true : null;
        const linkedinSocial = await this.localStorage.getUserSocial("l");
        linkedinSocial ? this.state.socialL = true : null;
        const instagramSocial = await this.localStorage.getUserSocial("i");
        instagramSocial ? this.state.socialI = true : null;
        const snapchatSocial = await this.localStorage.getUserSocial("s");
        snapchatSocial ? this.state.socialS = true : null;
        const telegramSocial = await this.localStorage.getUserSocial("m");
        telegramSocial ? this.state.socialTele = true : null;
        // console.log(facebookSocial);
        // console.log(twitterSocial);
        // console.log(linkedinSocial);
        this.forceUpdate();

    }
    renderSocialMediaList() {
        return (
            <View>
                <ListItem itemDivider style={styles.socialMediaListItem} icon>
                    <Right>
                        <Ionicons name='logo-facebook' size={25} color={Colors.blue} />
                    </Right>
                    <Left>
                        <Switch value={this.state.socialF}
                            onValueChange={(value) => {
                                if (value) {
                                    this.setState({
                                        socialF: true,
                                        socialLetter: "f",
                                        dialog: true,
                                        title: localization.facebookUrl
                                    })

                                }
                                else {
                                    this.setState({
                                        socialF: false
                                    })
                                }
                            }}
                        />
                    </Left>
                </ListItem>

                <ListItem itemDivider style={styles.socialMediaListItem} icon>
                    <Right>
                        <Ionicons name='logo-instagram' size={25} />
                    </Right>
                    <Left>
                        <Switch value={this.state.socialI}
                            onValueChange={(value) => {
                                if (value) {
                                    this.setState({
                                        socialI: true,
                                        socialLetter: "i",
                                        dialog: true,
                                        title: localization.instagramUrl
                                    })
                                }
                                else {
                                    this.setState({
                                        socialI: false
                                    })
                                }

                            }

                            }
                        />
                    </Left>
                </ListItem>

                <ListItem itemDivider style={styles.socialMediaListItem} icon>
                    <Right>
                        <Ionicons name='logo-whatsapp' size={25} color="green" />
                    </Right>
                    <Left>
                        <Switch value={this.state.socialW} />
                    </Left>
                </ListItem>

                <ListItem itemDivider style={styles.socialMediaListItem} icon>
                    <Right>
                        <FontAwesome name='twitter-square' size={25} color={Colors.lightBlue} />
                    </Right>
                    <Left>
                        <Switch value={this.state.socialT}

                            onValueChange={(value) => {
                                if (value) {
                                    this.setState({
                                        socialT: true,
                                        dialog: true,
                                        title: localization.twitterUrl,
                                        socialLetter: "t"
                                    })

                                }
                                else {
                                    this.setState({ socialT: false })
                                }

                            }}
                        />
                    </Left>
                </ListItem>

                <ListItem itemDivider style={styles.socialMediaListItem} icon>
                    <Right>
                        <FontAwesome name='linkedin-square' size={25} color={Colors.blue} />
                    </Right>
                    <Left>
                        <Switch
                            value={this.state.socialL}
                            onValueChange={(value) => {

                                if (value) {

                                    debugger;
                                    this.setState({
                                        socialL: true,
                                        title: localization.linkedinUrl,
                                        dialog: true,
                                        socialLetter: "l"

                                    })

                                }
                                else {
                                    this.setState({
                                        socialL: false
                                    })
                                }

                            }}

                        />
                    </Left>
                </ListItem>
                <ListItem itemDivider style={styles.socialMediaListItem} icon>
                    <Right>
                        <FontAwesome name='snapchat-square' size={25} color="yellow" />
                    </Right>
                    <Left>
                        <Switch
                            value={this.state.socialS}
                            onValueChange={(value) => {

                                if (value) {


                                    this.setState({
                                        socialS: true,
                                        title: localization.snapchatUrl,
                                        dialog: true,
                                        socialLetter: "s"

                                    })

                                }
                                else {
                                    this.setState({
                                        socialS: false
                                    })
                                }

                            }}
                        />
                    </Left>
                </ListItem>

                <ListItem itemDivider style={styles.socialMediaListItem} icon>
                    <Right>
                        <FontAwesome name='youtube-play' size={25} color={Colors.red} />
                    </Right>
                    <Left>
                        <Switch
                            value={this.state.socialY}
                            onValueChange={(value) => {

                                if (value) {


                                    this.setState({
                                        socialY: true,
                                        title: localization.youtubeUrl,
                                        dialog: true,
                                        socialLetter: "y"

                                    })

                                }
                                else {
                                    this.setState({
                                        socialY: false
                                    })
                                }

                            }}
                        />
                    </Left>
                </ListItem>

                <ListItem itemDivider style={styles.socialMediaListItem} icon>
                    <Right>
                        <FontAwesome name='telegram' size={25} color={Colors.lightBlue} />
                    </Right>
                    <Left>
                        <Switch 
                           value={this.state.socialTele}
                           onValueChange={(value) => {

                               if (value) {
                                   this.setState({
                                       socialTele: true,
                                       title: localization.telegramUrl,
                                       dialog: true,
                                       socialLetter: "m"

                                   })

                               }
                               else {
                                   this.setState({
                                       socialTele: false
                                   })
                               }

                           }}
                        />
                    </Left>
                </ListItem>
            </View>
        )
    }
    renderText() {
        return (
            <View style={styles.textContainer}>
                <Text style={styles.text}>{localization.socialMediaProfile}</Text>
            </View>
        )
    }

    render() {
        if (this.props.errorData) {
            if (this.props.errorData.msg === "token_expired") {
                this.refs.toast.show(this.props.errorData.msg, 1500, () => {
                    this.props.navigation.navigate('Welcome');
                })
            }
        }
        return (
            <Container style={{ backgroundColor: Colors.lightBlue }} >
                <HeaderWithoutButtons navigation={this.props.navigation} page='profile' />

                <Content>
                    {this.renderText()}

                    {this.renderSocialMediaList()}



                    <Toast
                        ref="toast"
                        position='bottom'
                        positionValue={200}
                        fadeInDuration={750}
                        fadeOutDuration={2000}

                        textStyle={{ color: 'white' }}
                    />
                    {this.showDialog()}

                </Content>


            </Container>
        )
    }
}
const styles = StyleSheet.create({
    socialMediaListItem: {
        flex: 1,
        width: '90%',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        backgroundColor: Colors.white,
        marginLeft: '2%'
    },
    textContainer: {
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        marginTop: '5%', marginBottom: '5%'
    }
})
const mapStateToProps = (state) => {
    return {
        ...state.socialReducer
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addSocial: (socialData) => dispatch(socialIntegrationRequest(socialData))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SocialMedia)