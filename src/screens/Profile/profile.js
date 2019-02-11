import React, { Component } from "react";
import { Text ,View} from "react-native";
import { Container, Content, Item, Card, CardItem, Left, Right, Body, ListItem } from "native-base";
import { HeaderWithoutButtons } from "../../Ui/headerWithoutButtons";
import { Colors } from "../../assets/colors";
import { Avatar } from "../../Ui/avatar";
import { AppText } from "../../Ui/appText";
import { LocalStorage } from "../../helpers/localStorage";
import Icon from "react-native-vector-icons/Ionicons";
import localization from "../../localization/localization";

export class ProfilePage extends Component {
    render() {
        return (
            <Container style={{ flex: 1, backgroundColor: Colors.lightBlue }}>
                <HeaderWithoutButtons page='Home' navigation={this.props.navigation} />
                <Content contentContainerStyle={{flex:1, justifyContent: 'flex-start', alignItems: 'center' }}>
                    <Avatar page="personal" image={LocalStorage.user.image}/>
                    <Item>

                        <AppText text={LocalStorage.user.name} />
                    </Item>
                    <View style={{flex:0.5,justifyContent:'center',alignItems:'center'}}>

                    <Card>
                        <CardItem style={{ width: '80%' }}>
                            <Item>

                                <AppText text={localization.contactInfo} />

                                <Icon name='md-call' size={20} />

                            </Item>

                        </CardItem>
                        <CardItem>
                        <AppText text={LocalStorage.user.phone } />

                            <AppText text={LocalStorage.user.prefix } />

                        </CardItem>
                       
                    </Card>

                    <Card>
                        <CardItem style={{width:'80%'}}>
                            <Item>

                                <AppText text={localization.basicInfo} />

                            <Icon name="md-person" size={20} />

                            </Item>
                        </CardItem>

                        <CardItem>
                            <AppText text={LocalStorage.user?LocalStorage.user.email:""}/>
                        </CardItem>
                    </Card>

                    </View>

                </Content>
            </Container>
        )
    }
}
