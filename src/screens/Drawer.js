import React, { Component } from 'react';
import { View, StyleSheet, Text, Platform, ScrollView, ActivityIndicator } from "react-native";
import { Avatar } from "../Ui/avatar";
import { CustomButton } from '../Ui/customButon';
import { Colors } from '../assets/colors';
import localization from '../localization/localization';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Container, Button, ListItem, Item, Card, CardItem, Icon, Thumbnail, List, Left, Body, Right, Content } from 'native-base';
import { LocalStorage } from '../helpers/localStorage';
import { AppText } from '../Ui/appText';
import { visitorLogoutRequest } from "../store/Actions/actions/visitor";
import { allNationalities } from "../store/Actions/actions/country";
import Toast, { Duration } from "react-native-easy-toast";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
const routes = ["Profile", "Welcome"];
const membership = `${localization.membership}-${localization.renewMembership}`
class SideDrawer extends Component {
    state = { visits: null }
    constructor(props) {
        super(props);
    }
    logoutsession = 0;
    async componentDidMount() {
        await this.getVisitsNumber();
    }
    async getVisitsNumber() {
        debugger;
        const num = await new LocalStorage().getVisits();
        if (num != -1) {

            if (LocalStorage.user) {
                debugger;
                if (LocalStorage.user.hasOwnProperty("professional_card")) {
                    debugger;
                    console.log(num + " number");

                    this.setState(
                        {
                            visits: (<Text>
                                {localization.numVisits + " " + num}
                            </Text>

                            )
                        })
                }
                else {
                    this.setState({ visits: null });
                }

            }
        }

    }
    getNationality() {
        debugger;
        let nationality;
        this.getVisitsNumber();
        if (LocalStorage.user) {
            debugger;
            const language = localization.getLanguage();

            if (language === "en") {

                nationality = LocalStorage.user.nationality.name_en


            }
            else {

                nationality = LocalStorage.user.nationality.name_ar



            }
            return nationality;
        }
        else {
            nationality = "";
        }
    }
    country = "";


    redirectToScreen(screenName) {
        if (LocalStorage.user) {
            this.props.navigation.navigate(screenName)
        }
        else {
            this.refs.toast.show(localization.loginFirst);
        }
    }
    async setUserLogout() {

        await new LocalStorage().logout();
        this.forceUpdate();

    }

    render() {

        if (this.props.logoutData) {
            if (this.logoutsession !== 0) {
                this.refs.toast.show(this.props.logoutData.msg);
                this.logoutsession = 0;
                this.setUserLogout();

            }
        }
        if (this.props.errorData) {
            if (this.logoutsession !== 0) {
                this.refs.toast.show(this.props.errorData.msg);
                this.logoutsession = 0;
            }
        }
        return (
            <Container style={{ flex: 1, backgroundColor: Colors.lightBlue }}>
                <Content contentContainerStyle={{ flex: 1, justifyContent: 'center' }}>

                    <View style={styles.container}>
                        <View style={styles.topContainer}>

                            {LocalStorage.user ?
                                <Avatar page="drawer" image={LocalStorage.user.image} /> : <Icon name="person" style={{ alignSelf: 'center' }} />
                            }

                            {LocalStorage.user ?


                                <Text >
                                    {LocalStorage.user.name}

                                </Text>




                                : null
                            }

                            {LocalStorage.user ?

                                <Text>

                                    {this.getNationality()}
                                </Text>

                                : null}

                            {this.state.visits}

                        </View>


                    </View>
                    {/* <View style={{flex:1,justifyContent:'flex-start',alignItems:'flex-start'}}> */}

                    <View style={styles.buttonsContainer}>
                        <ScrollView style={{ flex: 1, width: '100%', backgroundColor: Colors.lightBlue }}>
               
                        
                                    <Button
                                    full
                                    style={styles.customButton} iconLeft onPressIn={() => this.props.navigation.navigate('Home')} >
                                        <Ionicons name='md-home' size={20} />
                                        <Text>{localization.mainPage} </Text>
                                    </Button>


                            
                                    <Button 
                                    full
                                     onPressIn={() => this.redirectToScreen('profilePage')}
                                    style={styles.customButton} iconLeft  >
                                        <Ionicons name='md-person' size={20} />
                                        <Text>{localization.personalPage}  </Text>
                                    </Button>


                                {LocalStorage.user ? null :
                                   

                 
                                        <Button 
                                        full
                                     onPressIn={() => 
                                        {
                                            
                                        this.props.navigation.navigate('Welcome')}
                                     }
                                    style={styles.customButton} iconLeft >
                                        <Ionicons name='md-log-in' size={20} />
                                        <Text>{localization.renewMembership} </Text>
                                    </Button>


                                 

                                }
                                {LocalStorage.user ? LocalStorage.user.hasOwnProperty("professional_card") ?
                                  

                  
                                        <Button 
                                        full
                                     onPressIn={() => this.props.navigation.navigate('statistics')} 
                                    style={styles.customButton} iconLeft  >
                                        <MaterialIcons name="insert-chart" size={20} />
                                        <Text>{localization.statistics} </Text>
                                    </Button>
                                  


                                    : null : null
                                }

          

                                    
                                    <Button 
                                    full
                                    onPressIn={() => this.props.navigation.navigate('Language')}
                                    style={styles.customButton} iconLeft >
                                          <MaterialIcons name="language" size={20} />
                                        <Text>{localization.changeLanguage} </Text>
                                    </Button>


          

                                
                   
                                    <Button 
                                    full
                                    onPressIn={() => this.redirectToScreen('profile')}

                                    style={styles.customButton} iconLeft  >
                                         <Ionicons name="md-settings" size={20} />
                                        <Text>{localization.settings} </Text>
                                    </Button>
    

                                {LocalStorage.user ? !this.props.loadingLogout ?

                                  
                                
                                        <Button 
                                        full
                                    onPressIn={() => {
                                        this.props.logout(
                                            { token: LocalStorage.user.token });
                                        this.logoutsession = 1;
                                    }}


                                    style={styles.customButton} iconLeft>
                                          <Ionicons name="md-log-out" size={20} />
                                        <Text>{localization.signOut} </Text>
                                    </Button>
                                  


                                    : <ActivityIndicator /> : null}

                            {/* </List> */}


                        </ScrollView>
                        <Toast
                            ref="toast"
                            position='bottom'
                            positionValue={400}
                            fadeInDuration={750}
                            fadeOutDuration={1000}
                            // opacity={0.8}
                            textStyle={{ color: 'white' }}
                        />

                    </View>





                </Content>

            </Container>


        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 0.2,
        justifyContent: 'center',
        alignItems: 'center',

        backgroundColor: Colors.lightBlue
    },
    topContainer: {
        flex: Platform.OS == 'ios' ? 0.2 : 0.3,
        alignItems: 'center',

    },
    buttonsContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        width: '100%',

        marginTop: '15%',
    },
    customButton: {
        marginTop: Platform.OS == 'android' ? '5%' : '-3%',
        backgroundColor: Colors.lightBlue,
      
        backgroundColor:Colors.white,
    
    }
})

const mapStateToProps = (state) => (
    {
        ...state.visitorReducer,
        ...state.countryReducer
    }
)
const mapDispatchToProps = (dispatch) => (
    {
        getNationalities: () => dispatch(allNationalities()),
        logout: (data) => dispatch(visitorLogoutRequest(data))
    }
)
export default connect(mapStateToProps, mapDispatchToProps)(SideDrawer)
