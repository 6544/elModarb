import React,{Component} from 'react';
import { View,StyleSheet,Text,Modal,ScrollView } from "react-native";
import { Icon, Left, Right, Container,TouchableHighlight, Content, Header, Body, Title, Form, Item, Label, Input, Textarea, Radio, Button, Card, CardItem, List, CheckBox, ListItem, Picker } from 'native-base';
import CustomInput from '../../Ui/CustomIput';
import Mobile from '../../Ui/Mobile';
import { HeaderScreen } from '../../Ui/Header';
import { Colors } from '../../assets/colors';
import { CustomButton } from '../../Ui/customButon';
import localization from '../../localization/localization';
import { CustomPicker } from '../../Ui/customPicker';
import { connect } from "react-redux";
import Toast,{DURATION} from "react-native-easy-toast";
import {updatePhone,RegisterVisitorRequest, updateState,updateName,updateCountry,updateEmail,updateNationality,updatePassword,updatePrefix } from "../../store/Actions/actions/visitor";
import {allCities,allCountries,allNationalities,selectCountry,selectCity,selectNationality} from "../../store/Actions/actions/country";
import VisitorForm from './registerVisitorForm';
import { HeaderWithoutButtons } from '../../Ui/headerWithoutButtons';

// مطلوب - معروض - مؤتمرات - ندوات - ملتقيا
class Register extends Component{
   
        constructor(props){
       super(props);
       //this.navigationPage=this.props.navigation.getParam('navigation');
  
   }
   
 
    checkPassword(){
        if(this.props.password!=this.state.confirmPassword){
            this.refs.toast.show("Confirm password must be equal password")
        }
    }
   
    welcome(){
        return(
            <View style={{width:'90%',justifyContent:'space-around',alignContent:'center',alignSelf:'center'}}> 
            <Text style={{flex:1,textAlign:'center',color:Colors.white}}>
               {localization.registerVisitorWelcomeText}
            </Text>
            <Text style={{color:'yellow',textAlign:'center'}}>
                {localization.registerVisitor}
            </Text>
        </View>
        )
    }
    registerCard(){
        return(
            <Card>
            <CardItem style={{backgroundColor:'white'}}>
                <Body>
                    <Text style={{color:'orange',alignSelf:"center"}}>
                     {localization.visitorRegistration}
                    </Text>
                </Body>
            </CardItem>
        </Card>
        )
    }
     
    render(){
        return(
            <Container style={{flex:1}}>
                <HeaderWithoutButtons navigation={this.props.navigation} />

<Content contentContainerStyle={{flex:1,backgroundColor:Colors.lightBlue}}>
    
          <ScrollView style={{flex:1}}>
            {this.registerCard()}

            {this.welcome()}
          
            

<Text style={{flex:1,textAlign:'center',color:Colors.red,marginTop:'2%',}}>{localization.requiredFields}</Text>
<VisitorForm navigation={this.props.navigation}/>
    
   

          </ScrollView>

          </Content>
          </Container>

         
        )
                }
    
    
}
const styles=StyleSheet.create({
   
})
const mapStateToProps=(state)=>{
    return{
        ...state.visitorReducer,
        ...state.countryReducer
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        UpdateState:(stateID)=>dispatch(updateState(stateID)),
        Register:(data)=>dispatch(RegisterVisitorRequest(data)),
        getCountries:()=>dispatch(allCountries()),
        getcities:(country)=>dispatch(allCities(country)),
        getNationalities:()=>dispatch(allNationalities()),
        selectcountry:(country)=>dispatch(selectCountry(country)),
        selectcity:(city)=>dispatch(selectCity(city)),
        selectnationality:(nationality)=>dispatch(selectNationality(nationality))
    }
}
export default connect (mapStateToProps,mapDispatchToProps)(Register);