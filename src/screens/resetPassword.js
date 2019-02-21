import React, { Component } from "react";
import { Container, Header, Content, Card, Input, CardItem, Body, Item, ListItem } from "native-base";
import { View, StyleSheet, ActivityIndicator,ScrollView } from "react-native";
import { HeaderScreen } from "../Ui/Header";
import { Field, reduxForm } from 'redux-form';
import { Avatar } from "../Ui/avatar";
import { HeaderWithoutButtons } from "../Ui/headerWithoutButtons";
import { Colors } from "../assets/colors";
import { CustomButton } from "../Ui/customButon";
import localization from "../localization/localization";
import { CustomPicker } from '../Ui/customPicker';
import CustomInput from '../Ui/CustomIput';
import { connect } from 'react-redux';
import { UpdatePasswordRequest } from "../store/Actions/actions/updatePassword";
import { LocalStorage } from "../helpers/localStorage";
import Toast, { DURATION } from "react-native-easy-toast";
import { AppText } from "../Ui/appText";

const validate=values=>{
    console.log(errors);
   // debugger;
    const errors={};
    if(!values.oldpassword){
        errors.oldpassword=localization.required;
    }
    if(!values.newpassword){
        errors.newpassword=localization.required;
    }
    if(values.newpassword){
        if(values.newpassword.length<6)
        {
            
        errors.newpassword=localization.passwordValidation;
        }
    }
    if(!values.confirmPassword){
        errors.confirmPassword=localization.required;

    }
   if(values.newpassword!=values.confirmPassword){
       errors.confirmPassword=localization.exactPassword;
   }
   return errors;
}
class ResetPassword extends Component {
    saveButton=null;
    
    constructor(props) {
        super(props);


    }
    counterInfo=0;

   
   
    updateDataSubmit = values => {
       // debugger;
        this.counterInfo=1;
        this.props.updatePassword(
            {
                oldPassword: values.oldpassword,
                password: values.newpassword,
                confirmPassword: values.confirmPassword,
                token: LocalStorage.user.token,
                id: LocalStorage.user.id
            }
        )
    }
    renderInputField = (props) => {
        console.log(props)
        return (
            <View style={{flex:0.4, justifyContent:'center', alignItems:'center', paddingLeft:'8%'}}>

            <ListItem>
           

            <CustomInput placeholder={props.placeholder} secureTextEntry={props.secureTextEntry} text={props.input.value} changeText={props.input.onChange} containerStyle={props.containerStyle} label={props.label} />
            </ListItem>

            {props.meta.touched &&
        ((props.meta.error && <AppText style={{color:Colors.red}} text={props.meta.error}/>))}
            </View>

        
        )
    }
    render() {
        if (this.props.loading) {
            this.saveButton = <ActivityIndicator />
        }
        else {
            this.saveButton =
                <CustomButton onPress={this.props.handleSubmit(this.updateDataSubmit)} text={localization.save} style={{ alignSelf: 'center', backgroundColor: Colors.orange, width: '66%'}} />
        }
        if (this.props.updatedPasswordData) {
            if(this.refs.toast)
            this.refs.toast.show(localization.updated, 1500, () => {
                this.props.navigation.navigate('profile')
            })
        }
        else if (this.props.errorData) {
           // debugger;
            if(this.counterInfo!=0){
                if(this.props.errorData.msg==="token_expired"){
                    this.refs.toast.show(this.props.errorData.msg,1500,()=>{
                        this.props.navigation.navigate('Welcome')
                    })
                }
                else{
            this.refs.toast.show(this.props.errorData.msg);
            this.counterInfo=0;
                }
            }
        }

        return (
            <Container style={{ backgroundColor: Colors.lightBlue }}>
                <HeaderWithoutButtons navigation={this.props.navigation} page='profile' />
                <Content contentContainerStyle={styles.content}>
               <View style={{top:5}}>

                <Avatar page="reset" image={LocalStorage.user.image} />
               </View>

                    <ScrollView style={{flex:1}}>
                    <View style={{ flex: 0.7, justifyContent: 'space-evenly', alignItems: 'center' }}>

                            <Field secureTextEntry={true} placeholder={localization.oldPassword} type="text" label={localization.password} containerStyle={{ top: '2%' }} name="oldpassword" component={this.renderInputField} type="text" />


                            <Field secureTextEntry={true} placeholder={localization.newPassword} type="text" label={localization.password} containerStyle={{ top: '2%' }} name="newpassword" component={this.renderInputField} type="text" />
                            <Field secureTextEntry={true} placeholder={localization.newPassword} type="text" label={localization.password} containerStyle={{ top: '2%' }} name="confirmPassword" component={this.renderInputField} type="text" />

                        {this.saveButton}

                        <Toast
                            ref="toast"
                            position='bottom'
                            positionValue={300}
                            fadeInDuration={750}
                            fadeOutDuration={2000}
                            opacity={0.8}
                            textStyle={{ color: 'white' }}
                        />
                    </View>
                </ScrollView>
                </Content>
            </Container>
        )
    }
}
const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    inputs: {
        flex: 0.1, backgroundColor: Colors.white, width: '80%', height: '20%'
    },
    cardButtons: {
        width: '80%',
        height: '30%'
    }
})
const ResetPasswordForm = reduxForm({
    form: 'resetPassword',
    validate
})(ResetPassword);

const mapStateToProps = (state) => {
    return {
        ...state.updatePasswordReducer
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        updatePassword: (updateData) => dispatch(UpdatePasswordRequest(updateData))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ResetPasswordForm);