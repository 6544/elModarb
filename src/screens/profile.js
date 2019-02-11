import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Content, Container, Button } from "native-base";
import { HeaderScreen } from "../Ui/Header";
import { Avatar } from "../Ui/avatar";
import { HeaderWithoutButtons } from "../Ui/headerWithoutButtons";
import { Colors } from "../assets/colors";
import localization from "../localization/localization";
import { BorderedButton } from "../Ui/borderedButton";
import internetConnection from "../helpers/internetConnection";
import Toast, { DURATION } from "react-native-easy-toast";
import { LocalStorage } from "../helpers/localStorage";

export default class Profile extends Component {
    connection = new internetConnection();
    async navigateToScreen(screenName) {
        const connected = await this.connection.checkConnection();
        if (connected)
            this.props.navigation.navigate(screenName);
        else {
            this.refs.toast.show(localization.internetConnection);
        }
    }
    renderProfileButtons() {
        return (
            <View style={{ flex: 0.4, justifyContent: 'space-evenly' }}>
                <BorderedButton onPress={() => this.navigateToScreen('PersonalInfo')} style={styles.button} text={localization.personalData} />
                <BorderedButton onPress={() => this.navigateToScreen('resetPassword')} style={styles.button} text={localization.updatePassword} />
                {LocalStorage.user.hasOwnProperty("trainer") || LocalStorage.user.hasOwnProperty("center") ?
                    <BorderedButton onPress={() => this.navigateToScreen('SocialMedia')} style={styles.button} text={localization.SocialMedia} />
                    : null
                }
                <BorderedButton onPress={() => this.navigateToScreen('jobCard')} style={styles.button} text={localization.jobCard} />
            </View>
        )
    }
    renderTopContent() {
        return (
            <View style={{ flex: 0.2, marginTop: '5%' }}>
                <Avatar page="profile" image={LocalStorage.user.image} />
            </View>
        )
    }

    render() {
        return (
            <Container style={{ backgroundColor: Colors.lightBlue }}>
                <HeaderWithoutButtons navigation={this.props.navigation} page='Home' />
                <Content contentContainerStyle={styles.content}>
                    {this.renderTopContent()}
                    {this.renderProfileButtons()}
                    <Toast
                        ref="toast"
                        position='bottom'
                        positionValue={200}
                        fadeInDuration={750}
                        fadeOutDuration={2000}
                        textStyle={{ color: 'white' }}
                    />
                </Content>
            </Container>
        )
    }
}
const styles = StyleSheet.create({
    button: {
        width: '60%',
        borderWidth: 1,
        borderColor: Colors.orange,
        borderRadius: 10,
        backgroundColor: Colors.orange
    },
    content: {
        flex: 1, justifyContent: 'flex-start', alignItems: 'center'
    }

})