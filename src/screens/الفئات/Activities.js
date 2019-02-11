import React,{Component} from 'react';
import { View,StyleSheet,Text,FlatList ,TouchableHighlight} from "react-native";
import { Container, Tab, Content, Icon, ListItem, Thumbnail, Left, Body, Right, Button, Card, CardItem } from 'native-base';
import { HeaderScreen } from '../../Ui/Header';
import localization from '../../localization/localization';
import { NewChanges } from '../../Ui/newChangesCard';
const dataArray=[{key: 'مطلوب مدربين'}, {key: 'مؤتمر المد رب'},{key: 'مطلوب مستشار'},{key: 'معروض مركز تدريب'},{key: 'ملتقى التفكير والأيداع'}];
const uri = "https://facebook.github.io/react-native/docs/assets/favicon.png";

class Activities extends Component{
    render(){
        return(
            <Content style={{backgroundColor:'lightblue'}}>
                   <NewChanges/>
            <FlatList
             data={dataArray}
                renderItem={
                    ({item}) =>(
                    <View >
                        <Card style={{
                            backgroundColor:'white'}}>
                            <CardItem>
                                <Body>
                                    <Text style={{color:'black',alignSelf:'center'}}>
                                    {item.key}
                                    </Text>
                                </Body>
                            </CardItem>
                        </Card>    
              </View>)
       }
/>
            </Content>
        )
    }
}
const styles=StyleSheet.create({
    })
    export default  Activities;