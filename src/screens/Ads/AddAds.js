import React,{Component} from 'react';
import {Platform, View,StyleSheet,Text,Modal } from "react-native";
import { Icon, Left, Right, Container,TouchableHighlight, Content, Header, Body, Title, Form, Item, Label, Input, Textarea, Radio, Button, Card, CardItem, DatePicker } from 'native-base';
import { connect } from "react-redux";
import { AddAdvertismentRequest } from "../../store/Actions/actions/Advertisment";
import { ImageLogo } from '../../Ui/imageLogo';
import { CustomButton } from '../../Ui/customButon';
import { Colors } from '../../assets/colors';
// مطلوب - معروض - مؤتمرات - ندوات - ملتقيا
 class AddAds extends Component{
     state={
         title:null,
         content:null,
         date:null
     }
     addAdvertisment(){
    this.props.requestAdvertisment({
    userID:6,
    title:this.state.title,
    content:this.state.content,
    date:null
    });
     }
    render(){
        return(
          <View style={{justifyContent:'flex-start',backgroundColor:'lightblue',flex:1,marginTop:Platform.OS=='ios'?'10%':0 }}>
          <ImageLogo style={{height:'2%',flex:0.25,width:'50%'}}/>
         <Card>
                <CardItem style={{backgroundColor:'lightgray'}}>
                    <Body>
                        <Text style={{color:'darkred',alignSelf:"center"}}>
                           هذه الصفحة خاصة بأدارة و نشر الفرص التدريبية
                        </Text>
                    </Body>
                </CardItem>
            </Card>
        
       <View style={{height:'50%',width:'80%',flex:1}}>
       <Form >
       <Item inlineLabel last style={{borderColor:'black',borderStyle:'solid',borderWidth:8,top:5,backgroundColor:'white'}}>
              <Label style={{backgroundColor:'darkred',color:'white'}}>نص الاعلان</Label>
              <Input onChangeText={(text)=>this.setState({title:text})} placeholder="طلوب - معروض - مؤتمرات - ندوات - ملتقيات " style={{ textAlign: 'center',fontSize:10}}/>
            </Item>
            <Item inlineLabel last style={{borderColor:'black',borderStyle:'solid',borderWidth:8,top:12,backgroundColor:'white'}}>
              <Label style={{backgroundColor:'darkred',color:'white'}}>نص الاعلان</Label>
              <DatePicker
            defaultDate={Date.now}
            minimumDate={new Date(2018, 1, 1)}
            maximumDate={new Date(2018, 12, 31)}
            locale={"ar"}
           
            modalTransparent={true}
            animationType={"fade"}
            androidMode={"default"}
            placeHolderText="Select date"
            textStyle={{ color: "green" }}
            placeHolderTextStyle={{ color: "#d3d3d3" }}
            onDateChange={(newDate)=>this.setState({date:newDate})}
            />
            </Item>
           
              <Textarea onChangeText={(text)=>this.setState({content:text})}  style={{borderColor:'black',borderStyle:'solid',borderWidth:1,textAlign: 'center',top:17,backgroundColor:'white'}} placeholder="نص الاعلان" selectTextOnFocus scrollEnabled multiline 
              />
           <View style={{flexDirection:'row',flex:1,top:27}}>
            <Radio
            style={{flex:0.7}}
                color={"white"}
                selectedColor={"blue"}
                selected={false} 
                
              />
              <CustomButton onPress={()=>this.addAdvertisment()} style={{ flex:0.3,backgroundColor:Colors.red}} text="نشر الاعلان"/>
   
           </View>
          </Form>
       </View>
           


       <View style={{flex:1,height:'50%'}}>
<Card>
    <CardItem bordered style={{borderColor:'red'}}>
        <Body>
            <Text >
                ملاحظة :
            </Text>  
            <Text style={{textAlign:'right'}}>
                                عند كتابة الاعلان يتم حفظه ونشره ليظهر فى التطبيق كما يلى :
                </Text> 
                <Text style={{textAlign:'right',width:'95%',flexDirection:'row',flexWrap:'wrap'}}>
                1-الظهور فى الشريط الاعلانى فى أعلى التطبيق فى كل الصفحات.
                2-الظهور فى الصفحة الخاصة بالفرص التدريبية .
                </Text>
           <Text>
            أخر اعلان تم اضافته يظهر فى أعلى الصفحة دوما مع تاريخ نشره بعد مضى أسبوع من تاريخ النشر يبقى فى الارشيف .
           </Text>
        </Body>
    </CardItem>
</Card>
       </View> 
          </View>
        )
    }
}
const styles=StyleSheet.create({
   
});
const mapStateToProps=(state)=>{
    return{
        ...state.advertismentReducer,
        visitor:state.visitorReducer.visitor
    } 
}
const mapDispatchToProps=(dispatch)=>{
    return{
    requestAdvertisment:(advData)=>dispatch(AddAdvertismentRequest(advData))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(AddAds)