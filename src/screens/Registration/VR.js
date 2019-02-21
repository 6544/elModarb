import React, { PureComponent } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Image,
  ScrollView,
  Keyboard,
  StatusBar,
  KeyboardAvoidingView,
  Platform
} from "react-native";
import { CheckBox, Input, Item, Thumbnail, Button, Picker, } from "native-base";
import InputWithIcon from './Components/InputWithIcon';
import { Styles} from "@common";

import { Formik } from "formik";
import * as Yup from "yup";
import { RegExp } from "core-js";

const responsiveHeight=Styles.responsiveHeight;
const responsiveWidth=Styles.responsiveWidth;
const moderateScale=Styles.moderateScale;
const fontSize=Styles.fontSize;
export default class VR extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
  
      checked: true,
      height:responsiveHeight(80)
    }

  }
componentDidMount(){
}
  render() {
    return (

      <View
     
        style={{backgroundColor:'#5292ff', width: "100%", height: "100%" }}
      >
      <KeyboardAvoidingView style={[styles.container,]} behavior="padding"  enabled>

        <ScrollView
        
        style={{marginTop:moderateScale(5),height:responsiveHeight(20)}}
          ref='_ScrollView'
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        >
              <View style={[styles.container]}>
            {/* <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
              }}
            >
                     <Thumbnail large source={Images.Register.profileIcon} style={{backgroundColor:'white'}} />

            </View> */}
            <View style={{ flex: 1, marginTop: moderateScale(4),alignItems:'center' }}>
            <Formik
            initialValues={{name:'',
                            email:'',
                            phone:'',job:'',
                            address:'',password:'',repassword:''}}
            onSubmit={() => alert("submit")}
            validationSchema={Yup.object().shape({
              name: Yup.string().required('من فضلك أدخل أسمك'),
              nationality: Yup.string().required('من فضلك اختر الجنسية'),
            //   email: Yup.string().email().required('من فضلك أدخل إيميل صحيح'),
            //   phone: Yup.string().matches(/^01[0-2]{1}[0-9]{8}/, 'من فضلك أدخل رقم تليفون صحيح').required('من فضلك أدخل رقم هاتف صحيح'),
            //   job: Yup.string().required('من فضلك أدخل وظيفتك'),
            //   address: Yup.string().required('من فضلك أدخل عنوانك'),
            //   password: Yup.string().required('من فضلك أدخل كلمة مرور'),
            //   repassword:Yup.string()
            //   .oneOf([Yup.ref('password')],'لابد من تطابق كلمتي المرور')
            //   .required('مطلوب تأكيد كلمة المرور '),
            })}
            
            render={({
              values,
              handleSubmit,
              setFieldValue,
              errors,
              touched,
              setFieldTouched,
              isValid,
              isSubmitting
            }) => (
              <View style={{flex:1,width:'100%',flexDirection:'column'}}>
                 <InputWithIcon 
                    text='الاسم'
                    TextStyle={{ style:Styles.InputField.Register.Text}}
                    onTouch={setFieldTouched}
                    error={touched.name&&errors.name}
                    Item={{
                      style:Styles.InputField.Register.Item
                  }}
                    TextInput={{
                      value:values.name,
                      placeholder:''  ,
                      placeholderTextColor:'gray',
                      textContentType:'name',
                      onChangeText:val=>setFieldValue('name',val),
                    stackedLabel:false,
                    clearTextOnFocus:false,
                    returnKeyType:'next',
                    keyboardType:'ascii-capable',
                    style:Styles.InputField.TextInput,
                    onSubmitEditing:() => {
                     this._email.focus();
                    },
                    }}
               />
                 <InputWithIcon 
                    text='الجنسية'
                    TextStyle={{ style:Styles.InputField.Register.Text}}
                    onTouch={setFieldTouched}
                    error={touched.name&&errors.name}
                    Item={{
                      style:Styles.InputField.Register.Item
                  }}
                  Picker={{
                      value:values.name,
                      placeholder:'االجنسية'  ,
                      placeholderTextColor:'gray',
                      textContentType:'name',
                      data:[<Picker.Item val='0' label='ddd' />]               
                    }}
               />
              </View>
             
             
            )}
          />

           
            </View>
     
        
          </View>
         
        </ScrollView>
        </KeyboardAvoidingView>
        <View style={Styles.ButtonBottom.Container}>
              <TouchableOpacity
                style={Styles.ButtonBottom.Button}
                 
                onPress={()=>this.props.navigation.navigate('LoginScreen')}
                activeOpacity={0.5}

              >
                <Text style={Styles.ButtonBottom.Text}>تسجيل الدخول</Text>
              </TouchableOpacity>
            
            </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
    marginVertical: 10
  },
  input: {
    width: "85%",
    alignSelf: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 18,
    height: 50
  },
  text: {
    fontSize: 18,
    fontWeight: "200",
    color: "white"
  },
  bootomText: {
    fontSize: 20,
    fontWeight: "600",
    color: "white"
  }
});