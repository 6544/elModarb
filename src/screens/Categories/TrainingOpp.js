import React,{Component} from 'react';
import { View,StyleSheet,Text,FlatList ,TouchableHighlight,ActivityIndicator} from "react-native";
import { Container, Tab, Content, Icon, ListItem, Thumbnail, Left, Body, Right, Button } from 'native-base';
import { HeaderScreen } from '../../Ui/Header';
import localization from '../../localization/localization';
import {AllAdvertismentsRequest} from "../../store/Actions/actions/Advertisment";
import {connect} from "react-redux";
import { AppText } from '../../Ui/appText';
const dataArray=[{key: 'a'}, {key: 'b'}];

 class TrainingOpp extends Component{
     constructor(props){
         super(props);
         this.props.requestAdvertisements();
     }
    render(){
      return(
       this.props.loading?<ActivityIndicator/>:
            <Content style={{backgroundColor:'lightblue'}}>
            <FlatList  data={this.props.advertisments}
   renderItem={
       ({item}) =>(
        <ListItem   style={{flex:1 ,justifyContent:'center',alignItems:'center', backgroundColor:'white',top:10,right:10}}> 
        <AppText text={item.content}/>
                
            </ListItem>     
          
              )
       }
/>
            </Content>
       
        
      )
    }
      
}
const styles=StyleSheet.create({
    })

const mapStateToProps=(state)=>{
    return{
        ...state.advertismentReducer
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        requestAdvertisements:()=>dispatch(AllAdvertismentsRequest())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(TrainingOpp)