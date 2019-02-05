
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Welcome } from './src/screens/welcome';
import Management from "./src/screens/management";
import { I18nManager } from 'react-native';
import localization from './src/localization/localization'
import { Header } from 'native-base';
import Home from './src/screens/Home';
import Root  from "./src/screens/index"
import InternetConnection from './src/helpers/internetConnection';
import firebase from "react-native-firebase";

import { LocalStorage } from './src/helpers/localStorage';


export default class App extends Component {
  constructor(props) {
    super(props);


    if (Platform.OS == 'android')

      I18nManager.forceRTL(true);
    if (Platform.OS == 'ios') {
      I18nManager.forceRTL(true);

    }


    localization.setLanguage('ar');
    new InternetConnection();
  }
  async componentDidMount() {
    new LocalStorage().getLoginUser();
  const fcmtoken=await firebase.messaging().getToken();
  this.messageListener = firebase.messaging().onMessage((message) => {
    console.log(message);
    alert(message);
    // Process your message as required
});
  if(fcmtoken){
    console.log(fcmtoken);
    new LocalStorage().saveNotification(fcmtoken);
  }
  
  }
  render() {
    return (
      <Root />
    );
  }
  componentWillUnmount(){
    this.messageListener();
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    flexWrap: 'wrap'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
