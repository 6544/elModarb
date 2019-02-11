import React,{Component} from 'react';
import {View,StyleSheet,Image,Text} from 'react-native';
import { Container, Header, Right, Content, Item, Picker, Icon, Input, ListItem, Textarea, Left } from 'native-base';
import { Colors } from '../assets/colors';
import { ImageLogo } from "../Ui/imageLogo";
import localization from "../localization/localization";
import { CustomButton } from '../Ui/customButon';

export default class Management extends Component{

    renderHeader(){
        return(
    <Header style={{backgroundColor:Colors.blue,height:100}}>
            <Left>
                <ImageLogo/>

            </Left>
        </Header>
        )
    }

    renderFields(){
        return(
            <View style={styles.fieldsContainer}>
            <Item picker>
            <Picker
              mode="dropdown"
              iosIcon={<Icon name="ios-arrow-down-outline" />}
              style={{backgroundColor:'white' }}
              placeholder={localization.Consultancies}
              placeholderStyle={[styles.fields,{width:150}]}
              placeholderIconColor="#007aff"
              
            />
            </Item>

            <Item regular style={[{flex:0.15},styles.fieldsWidth]}>
            <Input placeholder={localization.mobileNumber} style={styles.fields}/>
            </Item>

           <View style={{flex:0.4}}>
            <Textarea rowSpan={8} bordered placeholder={localization.writeMessage} style={[{width:200},styles.fields]}/>
            </View>
            <View>
              <CustomButton text={localization.send} style={{backgroundColor:Colors.orange,width:'55%'}}/>
              </View> 
            </View>
        )
    }
render(){
    return(
    <Container style={{backgroundColor:Colors.lightBlue}}>
        {this.renderHeader()}
        <Content contentContainerStyle={{flex:1,justifyContent:'flex-start',alignItems:'center'}}>
            <Text style={{marginTop:'3%',flex:0.05}}>{localization.management}</Text>

        {this.renderFields()}
           
            
        </Content>
    </Container>
    )
}
}
const styles=StyleSheet.create({
fieldsWidth:{
    width:200,
    alignItems:'center',
    alignSelf:'center'
},
fieldsContainer:{
    flex:1,
    alignItems:'center'
},
fields:{
    backgroundColor:Colors.white,
    textAlign:'center'
}
})