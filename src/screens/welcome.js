import React, { Component } from 'react';
import { TouchableOpacity, Platform, ScrollView, KeyboardAvoidingView, NetInfo, ActivityIndicator, View, Image, StyleSheet, Text, I18nManager } from "react-native";
import { Button, Card, CardItem, ListItem, CheckBox, Body, List, Input, Item, Container, Content, Left, Right } from 'native-base';
import localization from "../localization/localization";
import { ImageLogo } from "../Ui/imageLogo";
import { CustomButton } from '../Ui/customButon';
import { Colors } from "../assets/colors";
import VisitorController from "../Controllers/visitorController";
import { visitorLogin, visitorSuccessLogin } from "../store/Actions/actions/visitor";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import InternetConnection from '../helpers/internetConnection';
import Toast, { DURATION } from "react-native-easy-toast";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { HeaderScreen } from '../Ui/Header';
import { AppText } from '../Ui/appText';
import { LocalStorage } from '../helpers/localStorage';
import Dialog from "react-native-dialog";
import CustomInput from '../Ui/CustomIput';
import { HeaderWithoutButtons } from '../Ui/headerWithoutButtons';

class Welcome extends Component {
    connection = new InternetConnection();
    state = {
        email: null, password: null,
        dialog: false, forgotPasswordEmail: null

    };
    counterLogin = 0;

    content = (
        <ListItem style={{justifyContent:'center',alignItems:'center'}}>
        <CustomButton onPress={async () => this.GetVisitor()
        }
            text={localization.signIn} style={{  width: '40%', backgroundColor: Colors.red }} />
        </ListItem>

         
    )


    constructor(props) {
        super(props);
    }
    handleCancel = () => {
        this.setState({ dialog: false });
    }
    handleConfirm = async () => {
        this.handleCancel();
        let emailData = new FormData();
        emailData.append('email', this.state.forgotPasswordEmail);
        const response = await fetch('http://modarrebarabi.sailaway-eg.com/api/recover', {
            method: 'POST',
            body: emailData
        });
        const data = await response.json();
        debugger;

        if (data.data.errors) {
            this.refs.toast.show(data.data.errors["email"]);

        }
        else {
            this.refs.toast.show(data.msg);

        }


    }

    showDialog() {
        return (
            <Dialog.Container visible={this.state.dialog}>
                <Dialog.Title>Forgot Password</Dialog.Title>
                <Dialog.Description>Please enter your email</Dialog.Description>
                <Dialog.Input
                    value={this.state.forgotPasswordEmail}
                    onChangeText={(text) => this.setState({ forgotPasswordEmail: text })}
                />
                <Dialog.Button label="Cancel" onPress={this.handleCancel} />
                <Dialog.Button label="Send" onPress={this.handleConfirm} />
            </Dialog.Container>
        )

    }


    async GetVisitor() {

        const connected = await this.checkConnection();

        if (connected) {
            if (this.state.email && this.state.password) {
                await this.props.login({ email: this.state.email, password: this.state.password })
                this.counterLogin = 1;
            }
            else {
                this.refs.toast.show(localization.requiredFields, 2000);

            }
        }
        else {
            this.refs.toast.show(localization.internetConnection, 1000);
        }


    }

    renderTop() {
        return (

            <View style={{ flex: 1 }}>

                {/* <ImageLogo style={styles.imageLogo} /> */}
                <CustomButton text={localization.signUpPage} style={styles.signUpButton} />
                <Card>
                    <CardItem>
                        <Text style={styles.trainingCenterCardItem}>
                            {localization.trainingCenterCardItem}
                        </Text>
                    </CardItem>
                </Card>

                <View style={styles.welcomeTextContainer}>
                    <AppText text={localization.welcome} style={{color:'white'}}/>
                    <AppText text={localization.firstapp} style={{color:'white'}}/>
                    <AppText text={localization.inOnePlace} style={{color:'white'}}/>
                </View>
            </View>

        )
    }
    async checkConnection() {
        const connected = await this.connection.checkConnection();
        if (connected) {
            return true;
        }
        else {
            this.refs.toast.show(localization.internetConnection, 1000);
            return false;
        }
    }

    render() {
        if (this.props.loading) {
            this.content = <ActivityIndicator size="large" color="black" />

        }

        else {
            debugger;
            this.content = (
                <CustomButton onPress={async () => this.GetVisitor()
                }
                    text={localization.signIn} style={{alignSelf:'center',marginTop:'5%', width: '60%', backgroundColor: Colors.red }} />
            )

        }

        if (this.props.data) {

            if (this.props.data.status) {
                debugger;
                new LocalStorage().setLoginUser(this.props.visitor);
                this.props.navigation.navigate('Home')
            }
            else {
                if (this.counterLogin != 0) {
                    this.refs.toast.show(this.props.data.msg);
                    this.counterLogin = 0;
                }
            }
        }
        return (
            <Container style={{ flex: 1, backgroundColor: Colors.lightBlue }}>
                <HeaderWithoutButtons navigation={this.props.navigation} page="Home" />
                <Content contentContainerStyle={styles.container}>


                    {this.renderTop()}
                    <ScrollView contentContainerStyle={{ flex: 1, width: '100%', height: '80%' }} >
                        {this.renderContent()}
                    </ScrollView>

                </Content>

            </Container>

        )
    }
    renderContent() {
        return (

            <ScrollView style={{ flex: 1, height: '100%', width: '100%' }}>

                {/* <View style={styles.contentContainer}> */}


                <View style={styles.inputContainer}>


            
                    <Input onChangeText={
                        (text) => this.setState({ email: text })
                    } value={this.state.email} style={styles.input} placeholder={localization.email} />


                    
                    <Input secureTextEntry={true} onChangeText={
                        (text) => this.setState({ password: text })
                    }
                        style={[{ flex: 1, height: '50%',marginTop:'5%' }, styles.input]} value={this.state.password} placeholder={localization.password} />



                  
                    {/* </View> */}


                </View>
                {this.content}

                <ListItem>
                    <Left style={{ flex: 0.4 }}>
                        <CheckBox checked={false} color='white' />
                        <AppText style={styles.rememberMeText} text={localization.rememberMe} />


                    </Left>

                    <Right style={{ flex: 0.7 }}>
                        <TouchableOpacity
                            onPress={() => {
                                this.setState({
                                    dialog: true
                                })
                            }}
                            style={{ flex: 0.2 }}
                        >
                            <AppText text={localization.forgotPassword} style={{color:'white'}}/>

                        </TouchableOpacity>
                    </Right>
                </ListItem>



                <View style={styles.orContainer}>
                    <Text style={styles.orText}>{localization.or}</Text>

                    <CustomButton text={localization.joinUs} style={styles.joinUsButton} />

                </View>
                <View style={styles.registerContainer}>
                    <CustomButton onPress={async () => {
                        debugger;
                        const connected = await this.checkConnection()
                        if (connected) {
                            this.props.navigation.navigate('registerTrainer')
                        }
                    }} text={localization.trainer_consultant} style={{ width: 105, backgroundColor: Colors.lightBlue, borderColor: Colors.black, borderWidth: 0.5, borderRadius: 10 }} />

                    <Button onPress={async () => {
                        const connected = await this.checkConnection()
                        if (connected) {
                            this.props.navigation.navigate('registerCenter')
                        }
                    }
                    } style={[styles.joinUsButton, {
                        marginTop: Platform.OS == 'android' ? '0%' : '0%',
                        marginBottom: Platform.OS == 'android' ? 0 : '5%',
                        width: Platform.OS == 'android' ? '30%' : '35%',
                        height: Platform.OS == 'ios' ? 50 : 50,
                        backgroundColor: Colors.purple,

                    }]}>
                        <View style={styles.centerContainer}>
                            <Text>
                                {localization.center}
                            </Text>
                            <Text style={{ flex: 1 }}>
                                {localization.trainingCenters_Consultancy}
                            </Text>
                        </View>
                    </Button>
                    <CustomButton text={localization.visitor} style={{ backgroundColor: Colors.orange }} onPress={async () => {
                        debugger;
                        const connected = await this.checkConnection();
                        if (connected) {
                            this.props.navigation.navigate('register', { navigation: this.props.navigation })

                        }
                    }
                    } />



                </View>
                <Toast
                    ref="toast"
                    position='top'
                    positionValue={200}
                    fadeInDuration={750}
                    fadeOutDuration={2000}
                    // opacity={0.8}
                    textStyle={{ color: 'white' }}
                />
                {this.showDialog()}

            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Platform.OS == 'ios' ? '10%' : 0,
        backgroundColor: Colors.lightBlue,
        justifyContent: 'flex-start',
    },
    orText: {
        alignSelf: 'center',
        color: Colors.black,
        fontSize: 15
    },
    centerContainer: {
        flex: 1, justifyContent: 'center', alignItems: 'center'
    },

    signUpButton: {
        backgroundColor: Colors.red,
        marginRight: '10%',
        marginTop: '5%',
        width: '35%',
        height: '10%',
        alignSelf: I18nManager.isRTL ? 'flex-end' : 'flex-start',

    },
    registerContainer: {
        flex: 0.2,
        marginTop: Platform.OS == 'android' ? '10%' : '15%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'flex-end'
    },
    input: {
        height: 40,
        backgroundColor: Colors.white,
        textAlign: 'center',
        width: '60%',
        alignSelf: 'center'
        //color:'green'
    },
    rowContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        // flex:Platform.OS=='ios'?0.2:0.5,
        marginTop: Platform.OS == 'android' ? '5%' : '2%'
    },

    orContainer: {
        flex: Platform.OS == 'ios' ? 0.2 : 0.6,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: Platform.OS == 'android' ? '15%' : '10%'
    },
    signUpText:
    {
        paddingLeft: '10%',
        color: Colors.white
    },
    trainingCenterCardItem: {
        color: 'orange',
        textAlign: 'center',
        flex: 1
    },
    welcomeText: {
        fontSize: 15,
        color: Colors.white,
        flex: 0.3,
    },
    welcomeTextContainer: {
        flex: Platform.OS == 'android' ? 0.7 : 0.4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    rememberMeText: {
        textAlign: I18nManager.isRTL ? 'left' : 'right',
        marginRight: '20%',
        color:Colors.white
    },
    joinUsButton: {
        backgroundColor: 'red',
        width: '33%',
        alignSelf: 'center'
    },
    imageLogo: {
        height: Platform.OS == 'android' ? 80 : 40,
        width: Platform.OS == 'android' ? '65%' : '50%',
        flex: Platform.OS == 'android' ? 0.5 : 0.3,

    },
    contentContainer: {
        flex: 0.2,
        justifyContent: 'center'
    },
    inputContainer: {
        flex: 0.3, justifyContent: 'center',alignItems:'center'
    }

})
const mapdStateToProps = (state) => (
    {
        ...state.visitorReducer
    }
)
const mapDispatchToProps = (dispatch) => (
    {
        login: (visitorData) => dispatch(visitorLogin(visitorData))
    }

)
export default connect(mapdStateToProps, mapDispatchToProps)(Welcome);
