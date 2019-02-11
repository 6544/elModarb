import React,{Component  } from "react";
import { View,Image,Text} from "react-native";
import { Container, Content } from "native-base";
import { Colors } from "../assets/colors";

export default class SplashScreen extends Component{
    componentWillMount(){
        setTimeout(()=>{
        this.props.navigation.navigate('Home');
        },2000)
    }
    render(){
        return(
        <Container style={{flex:1}}>
            <Content contentContainerStyle={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:Colors.lightBlue}}>
                <Image source={require("../assets/images/logo.png")} style={{height:'15%',width:'70%'}}  />
                <Text style={{color:Colors.white,fontSize:26,marginTop:'2%'}}>Al-Modarreb Al-Arabi</Text>
                <Text style={{color:"#FFA500",fontSize:20,marginTop:'2%'}}>2007-2019</Text>
                <View style={{flex:0.5,justifyContent:'flex-end',alignItems:'flex-end'}}>
                    <Image source={require("../assets/images/tooltip.png")} style={{height:200,width:300}}/>
                </View> 
            </Content>
        </Container>

        )
    }
}