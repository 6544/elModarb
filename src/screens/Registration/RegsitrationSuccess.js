import React, { Component } from 'react';
import { View, StyleSheet, Text, Modal } from "react-native";
import { Icon, Left, Right, Container, TouchableHighlight, Content, Header, Body, Title } from 'native-base';
import TrainerRegistrationSuccess from './TrainerRegistrationSuccess';
import CenterRegistrationSuccess from './CenterRegistrationSuccess';
import VisitorRegistrationSuccess from './VisitorRegistrationSuccess';
export default class RegistrationSuccess extends Component {
  constructor(props) {
    super(props);
    setTimeout(() => {
      this.props.navigation.navigate('Home');

    }, 2000)

  }
  RenderModal() {
    ;
    switch (this.props.navigation.getParam("userType")) {
      case "visitor":
        return (<VisitorRegistrationSuccess />)
      case "trainer":
        return (<TrainerRegistrationSuccess />)
      case "center":
        return (<CenterRegistrationSuccess />)
      default:
        return (<VisitorRegistrationSuccess />)



    }
  }


  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  render() {
    return (
      <View style={{
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
      }}>
        <Modal
          transparent={false}
          visible={true}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}
        >

          <View style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <Text style={{ alignSelf: 'center', textDecorationStyle: 'solid' }}>تم التسجيل بنجاح</Text>
            {this.RenderModal()}
          </View>

        </Modal>
      </View>


    )
  }
}
const styles = StyleSheet.create({

})