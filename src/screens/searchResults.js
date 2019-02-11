import React,{Component} from 'react';
import { View,StyleSheet,Text,FlatList ,TouchableHighlight} from "react-native";
import { Container, Tab, Content, Icon, ListItem, Thumbnail, Left, Body, Right, Button, Card, CardItem } from 'native-base';
import { Colors } from '../assets/colors';
import localization from '../localization/localization';
import { HeaderWithoutButtons } from '../Ui/headerWithoutButtons';
const uri = "https://facebook.github.io/react-native/docs/assets/favicon.png";


class SearchResults extends Component{
    dataArray=null;
    objectData=null;
    constructor(props)
{
    super(props);
    this.SetDataArray(this.props.navigation.getParam('dataArray'));
}
SetDataArray(centerChildren)
{
     debugger;
    console.log(centerChildren);
    if(centerChildren!=null)
    this.dataArray=centerChildren;

}
    render(){
        return(
            <Container style={{flex:1,backgroundColor:Colors.lightBlue}}>
            <HeaderWithoutButtons navigation={this.props.navigation} page="search"/>
            <View>
                <Text style={{color:'darkred',fontSize:17,alignSelf:'center'}}>{localization.searchResults} </Text>
 <FlatList data={this.dataArray }
 keyExtractor={(item)=>{item.id}}
         renderItem={
            ({item}) =>(
             
                     <Card key={item.id}>
                          <CardItem>
                          <Left>
                            <Thumbnail source={{uri:uri}} />
                            <Body>
                              <Text>Name : {item.name}</Text>
                              <Text note> Email : {item.email}</Text>
                              <Text>
                               Phone :  +{item.prefix}{item.phone}
                                </Text>
                            </Body>
                          </Left>
                        </CardItem>
                        </Card>
            )}
         />
            </View>
            </Container>

        
        )
    }
}
const styles=StyleSheet.create({
    })
    export default  SearchResults;