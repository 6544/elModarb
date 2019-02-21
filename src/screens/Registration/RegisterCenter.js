import React, { Component } from 'react';
import ImagePicker from 'react-native-image-picker';
import RenderCustomInput from '../../Ui/NewCustomIput';
import { connect } from 'react-redux';
import Modal from "react-native-modal";

import { Image, View, StyleSheet, Text, ScrollView, TouchableOpacity, Platform, TouchableHighlight, ActivityIndicator,ImageBackground } from "react-native";
import {
    Left, Right, Label, Textarea, Radio, Button,
    Card, CardItem, List, ListItem, Body, Item, Picker, CheckBox, Container, Content, Header, Icon
} from 'native-base';
import { RenderCustomPicker } from '../../Ui/NewcustomPicker';
import { RenderCustomPicker1 } from '../../Ui/NewcustomPicker1';

import { Colors } from '../../assets/colors';
import { CustomButton } from '../../Ui/customButon';

import localization from '../../localization/localization';
import { registerCenterAction } from '../../store/Actions/actions/centers';
import { RegistrationSuccess } from '../../screens/Registration/RegsitrationSuccess';
import { HeaderScreen } from '../../Ui/Header';
import { Field, reduxForm } from 'redux-form';
import Mobile from '../../Ui/Mobile';
import { allCountries, allCities, allCitiesOfState, allNationalities } from '../../store/Actions/actions/country';
import { LocalStorage } from '../../helpers/localStorage';
import CustomInput from '../../Ui/CustomIput';
import { AppText } from '../../Ui/appText';
import Toast, { DURATION } from "react-native-easy-toast";
import { Avatar } from '../../Ui/avatar';

const errMsg = "All Fields are required *";
const options = {
    title: 'Select Avatar',
    storageOptions: {
        cancelButtonTitle: 'Cancel',
        takePhotoButtonTitle: 'Take Photo from camera',
        chooseFromLibraryButtonTitle: 'Choose from Library',
        cameraType: 'back',
        mediaType: 'photo',
        skipBackup: true,
        cameraRoll: true,
        waitUntilSaved: true, // wait until pic is saved in cameral roll and return path in
        path: 'images', ///
    },
};


const validate = values => {
   // debugger;
    const errors = {};
    if (!values.name)
        errors.name = localization.required;
    else if (values.name.length > 50)
        errors.name = "name must be less than or equal 50 characters";

    if (!values.manager)
        errors.manager = localization.required;

    if (!values.establishment_year)
        errors.establishment_year = localization.required;

    if (values.establishment_year) {
        if (values.establishment_year > 2019 || values.establishment_year < 1500)
            errors.establishment_year = localization.yearfoundedValidation;
        else if (isNaN(values.establishment_year))
            errors.establishment_year = localization.yearfoundedNumValidation;
    }


    if (!values.courses1)
        errors.courses1 = localization.required;

    if (!values.courses2)
        errors.courses2 = localization.required;
    if (!values.courses3)
        errors.courses3 = localization.required;
    if (!values.courses4)
        errors.courses4 = localization.required;
    if (!values.courses5)
        errors.courses5 = localization.required;
    if (!values.courses6)
        errors.courses6 = localization.required;

    if (!values.professional_card)
        errors.professional_card = localization.required;

    if (!values.email)
        errors.email = localization.required;

    if (values.email) {
        var emailValidation = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const emailChecked = emailValidation.test(values.email.toLowerCase());
        if (!emailChecked) {
            errors.email = localization.emailValidation;
        }
    }

    if (!values.phone)
        errors.phone = localization.required;
    if (values.phone) {
        if (isNaN(values.phone))
            errors.phone = localization.mobileValidation;

        else if (values.phone.length < 8 || values.phone.length > 15)
            errors.phone = localization.phoneValidation;

    }

    if (!values.domain)
        errors.domain = localization.required;

    if (!values.password)
        errors.password = localization.required;


    if (!values.confirmPassword)
        errors.confirmPassword = localization.required;

    if (values.password) {
        if (values.password.length < 6)
            errors.password = localization.passwordValidation;
    }


    else if (values.confirmPassword != values.password)
        errors.confirmPassword = localization.exactPassword;

    if (!values.country)

        errors.country = localization.required

    if (!values.city)
        errors.city = localization.required

   // debugger;
    return errors;
}



class RegisterCenter extends Component {
    registerCenterButton;
    constructor(props) {
        super(props);
       // debugger;
        this.state = {
            avatarSource: null,
            visible: false,
            image: null,
            country_id: null,
            city_id: null,
            nationality_id: null,
            policyChecked: false,
            errList: [],

        }

    }
    allCountriesLocal = null;
    allCitiesLocal = null;

    renderTextareaField = (props) => {
        
       // debugger;
        return (
            <View style={{ flex: 0.4 }}>

                <ListItem style={{ flexDirection: 'column' }}>
                    <Label style={{ backgroundColor: 'orange', color: 'white', width: '90%', fontSize: 17.5, right: 20 }}>
                        {props.label}
                    </Label>
                    <Textarea value={props.input.value} multiline scrollEnabled style={{ fontSize: 15, backgroundColor: 'white', right: 20, width: '90%' }}
                        onChangeText={props.input.onChange} placeholder={props.placeholder} />
                </ListItem>

                {props.meta.touched &&
                    ((props.meta.error && <AppText style={{ color: Colors.red }} text={props.meta.error} />))}
            </View>
        )
    }

    submitCenter = (values) => {
       // debugger;
        if (this.state.policyChecked) {
            this.props.onRegisterCenter({
                name: values.name,
                professional_card: values.professional_card,
                phone: values.phone,
                password: values.password,
                confirmPassword: values.confirmPassword,
                email: values.email,
                courses1: values.courses1,
                courses2: values.courses2,
                courses3: values.courses3,
                image: this.state.image,
                prefix: this.prefix,
                country_id: values.country.id,
                city_id: values.city.id,
                manager: values.manager,
                establishment: values.establishment_year,
                courses4: values.courses4,
                courses5: values.courses5,
                courses6: values.courses6,
                domain: values.domain,
                fcmToken:LocalStorage.token
                //   modalContent:null

            });
        }
        else {
            this.refs.toast.show(localization.policyMessage)

        }



        //alert(`Validation success . Values= ${JSON.stringify(values)}`)
    }

    renderInputField = (props) => {
        return (
            <View style={{ flex: 0.4 }}>

                <ListItem>
                    <CustomInput placeholder={props.placeholder} secureTextEntry={props.secureTextEntry} text={props.input.value} changeText={props.input.onChange} containerStyle={props.containerStyle} label={props.label} />
                </ListItem>

                {props.meta.touched &&
                    ((props.meta.error && <AppText style={{ color: Colors.red }} text={props.meta.error} />))}
            </View>

        )
    }
    componentDidMount() {
        alert('jjjjjjj')
        this.props.getAllCountries();
        this.prefix='966';
        this.props.getAllCities(
            {
                "id": 191,
                "sortname": "SA",
                "name_en": "Saudi Arabia",
                "name_ar": "المملكة العربية السعودية",
                "phonecode": "966",
                "created_at": "2018-09-29 04:11:05",
                "updated_at": "2018-11-05 11:36:50"
            }
        );

    }
    _toggleModal = () =>
        this.setState({ visible: !this.state.visible });
     getAllNeededCountries(countries) {

      try {
        this.allCountriesLocal =countries.countries.map((item, index) => {
            if (typeof item !== 'undefined')
                return (<Picker.Item key={item.id} label={item.name_en} value={item} />)
        })

      } catch (error) {
          console.log('=============allcounterues=======================')
          console.log(error)
          console.log('====================================')
      }
    }


    renderMobileField = (props) => {
        return (
            <View style={{ flex: 0.4 }}>

                <ListItem>

                    <Mobile value={props.input.value} changeText={props.input.onChange} mobileExtension={props.mobileExtension} label={localization.mobileNumber}/>

                </ListItem>

                {props.meta.touched &&
                    ((props.meta.error && <AppText style={{ color: Colors.red }} text={props.meta.error} />))}
            </View>

        )
    }


    render() {

        // alert(this.props.loadingCenter)
        if (this.props.loadingCenter) {
            this.registerCenterButton = <ActivityIndicator />
        }
        else {
            this.registerCenterButton = 
            <CustomButton style={{marginRight:'5%', flex: 0.3, borderColor: Colors.black, borderWidth: 0.5, borderRadius: 10 }} text={localization.Register} onPress={this.props.handleSubmit(this.submitCenter)} />
            
        }
        if (this.props.countries)
            this.getAllNeededCountries(this.props.countries);



        if (this.props.cities)

            this.allCitiesLocal = this.props.cities.states.map((item, index) => {
                if (typeof item !== 'undefined')
                return (
                    <Picker.item key={item.id} label={item.name_en} value={item} />)

            })

        if (this.props.errorsList) {
           // debugger;
            this.state.errList=[];
            for (let err in this.props.errorsList) {
                this.state.errList.push(<AppText style={{color:Colors.red}} text={this.props.errorsList[err][0]}/>);
            }
        }
        //change
        if (this.props.center) {
           // debugger;
            this.refs.toast.show(this.props.center.msg,1500,()=>{
                new LocalStorage().setVisits({ id: this.props.center.data.user.id, num: 0 });

                this.props.navigation.navigate('RegistrationSuccess', { userType: 'center' });
            })
          
        }

        return (
            <Container style={{ flex: 1 }}>
                <HeaderScreen navigation={this.props.navigation} style={{ width: '100%' }} />
                <Content contentContainerStyle={{ flex: 1 }}>

                    <ScrollView style={{ backgroundColor: Colors.lightBlue}}>

                        <Card>
                            <CardItem style={{ backgroundColor: Colors.white }}>
                                <Body>
                                    <Text style={{ color:Colors.orange, alignSelf: "center" }}>
                                        {localization.RegisterCenter}
                                    </Text>
                                </Body>
                            </CardItem>
                        </Card>
                        <List>
                            <ListItem itemHeader first>
                                <Text style={{ color: 'white' }}>{localization.AbouttheCenter}</Text>
                            </ListItem>

                            <Field
                                name="name"
                                component={this.renderInputField}
                                changeText={(text) => this.setState({ name: text })}
                                text={this.state.name}
                                placeholder={localization.placeholder50}
                                label={localization.name} />
                                   <Field label='المؤسسة' data={[<Picker.Item value="center" key="0" label="مركز" />,
                 <Picker.Item key="1" value="Statue" label="معهد تدريب أو إستشارات" />]} name="department" component={RenderCustomPicker} type="text" />

                            <Field
                                component={this.renderInputField}
                                name="manager"
                                changeText={(text) => this.setState({ manager: text })}
                                text={this.state.manager}
                                label={localization.manager} />

                            <Field
                                component={this.renderInputField}
                                name="establishment_year"

                                changeText={(text) => this.setState({ establishment: text })}
                                text={this.state.establishment} label={localization.YearFounded} />

                            <Field name="country" component={RenderCustomPicker1}
                                onchangeValue={(country_id) => {

                                    console.log(country_id);
                                    this.allCitiesLocal= [<Picker.item key='noCity' style={{color:'gray'}} label='جاري تحميل البيانات' value='جاري تحميل البيانات' />]
                                    this.props.getAllCities(country_id);
                                    this.prefix = country_id.phonecode;
                                    this.setState({country_id:country_id})
                                }}
                                value={this.state.country_id}
                                data={this.allCountriesLocal}
                                label={localization.country}
                                />

                            <Field name="city" component={RenderCustomPicker} onchangeValue={(city_id) => { this.setState({ city_id: city_id }) }}
                                selected={this.state.city_id} //el mafrod teb2a label 
                                data={this.allCitiesLocal}
                                label={localization.city} />
                            <ListItem itemHeader first>
                                <Text style={{ color: 'white' }}>{localization.ProfessionalInformation}</Text>
                            </ListItem>
                            <ListItem>
                                <Label style={{ backgroundColor: 'orange', color: 'white', height: '140%', flex: 0.9 }}>مجالات : التدريب / الاستشارات - الرئيسية</Label>
                            </ListItem>

                            <Field name="courses1" component={this.renderInputField} changeText={(text) => this.setState({ courses1: text })}
                                text={this.state.courses1} label="1" style={{ flex: 0.1 }} inputStyle={{ flex: 0.9 }} />


                            <Field name="courses2" component={this.renderInputField} label="2" changeText={(text) => this.setState({ courses2: text })}
                                text={this.state.courses2} style={{ flex: 0.1 }} inputStyle={{ flex: 0.9 }} />

                            <Field name="courses3" component={this.renderInputField} label="3"
                                changeText={(text) => this.setState({ courses3: text })}
                                text={this.state.courses3}
                                style={{ flex: 0.1 }} inputStyle={{ flex: 0.9 }} />

                            <Field name="courses4" component={this.renderInputField} label="4"
                                changeText={(text) => this.setState({ courses4: text })}
                                text={this.state.courses4}
                                style={{ flex: 0.1 }} inputStyle={{ flex: 0.9 }} />
                            <Field name="courses5" component={this.renderInputField} label="5"
                                changeText={(text) => this.setState({ courses5: text })}
                                text={this.state.courses5}
                                style={{ flex: 0.1 }} inputStyle={{ flex: 0.9 }} />

                            <Field name="courses6" component={this.renderInputField} label="6"
                                changeText={(text) => this.setState({ courses6: text })}
                                text={this.state.courses6}
                                style={{ flex: 0.1 }} inputStyle={{ flex: 0.9 }} />

                        

                                <Field
                                    name="professional_card"
                                    label= {localization.ProfessionalCard}
                                    component={this.renderTextareaField}
                                    onChangeText={(text) => this.setState({ professional_card: text })}
                                    value={this.state.professional_card}
                                    placeholder={localization.DesignCard}
                                />
                            <ListItem itemHeader>
                                <Text style={{ color: 'white' }}>{localization.Meansofcommunication}</Text>
                            </ListItem>

                            <Field name="email" component={this.renderInputField} changeText={(text) => this.setState({ email: text })}
                                text={this.state.email} label={localization.email} placeholder={localization.placeholder50} />

                            <Field name="phone" component={this.renderMobileField} changeText={(text) => this.setState({ phone: text })}
                                text={this.state.phone} mobileExtension={this.prefix} label={localization.mobileNumber} />

                            <Field name="domain" component={this.renderInputField} changeText={(text) => this.setState({ domain: text })}
                                text={this.state.domain} label={localization.website} placeholder="www.domain.com" />

                            <Field name="password" component={this.renderInputField}
                                changeText={(text) => this.setState({ password: text })}
                                text={this.state.password}
                                label={localization.password} style={{ flex: 0.3 }} secureTextEntry={true} />

                            <Field name="confirmPassword" component={this.renderInputField}
                                changeText={(text) => this.setState({ confirmPassword: text })}
                                text={this.state.confirmPassword}
                                secureTextEntry={true}
                                label={localization.confirmPassword} style={{ flex: 0.3 }} />

                        </List>
                        <View style={{ flexDirection: 'row', width: '90%', justifyContent: 'center' }}>
                            <View style={{ flex: 0.3, left: 10 }}>
                            <TouchableOpacity
                        style={{
                            borderWidth: 1,
                            borderColor: 'rgba(0,0,0,0.2)',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: 100,
                            height: 100,
                            backgroundColor: '#fff',
                            borderRadius: 100,
                        }}
                        onPress={() => {
                            ImagePicker.showImagePicker(options, (response) => {
                                console.log('Response = ', response);
                                if (response.didCancel) {
                                    console.log('User cancelled image picker');
                                }
                                else if (response.error) {
                                    console.log('ImagePicker Error: ' + response.error);
                                }
                                // source{{uri:'file:///storage/emulated/0/DCIM/IMG_20161201_125218.jpg'}} 
                                else {
                                    this.setState({ image: response.uri, });
                                    this.setState({
                                        avatarSource: {
                                            uri: response.uri,
                                            type: 'image/jpg',
                                            name: 'image.jpg',
                                        }
                                    })
                                };

                            }
                            );

                        }}
                    >
                      {this.state.avatarSource === null ? (
                     <Text style={{ textAlign: 'center', flexWrap: 'wrap', width: '50%' }}>{localization.upladImage}</Text>
            ) : (
            <Image     style={{
                borderWidth: 1,
                borderColor: 'rgba(0,0,0,0.2)',
                alignItems: 'center',
                justifyContent: 'center',
                width: 100,
                height: 100,
                backgroundColor: '#fff',
                borderRadius: 100,
            }} source={{uri:this.state.avatarSource.uri}} />)}
                    </TouchableOpacity>
              
                                {/* <TouchableOpacity
                                    style={{
                                        borderWidth: 1,
                                        borderColor: 'rgba(0,0,0,0.2)',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        width: 100,
                                        height: 100,
                                        backgroundColor: '#fff',
                                        borderRadius: 100,
                                    }}
                                    onPress={() => {
                                        ImagePicker.showImagePicker(options, (response) => {
                                            console.log('Response = ', response);
                                            if (response.didCancel) {
                                                console.log('User cancelled image picker');
                                            }
                                            else if (response.error) {
                                                console.log('ImagePicker Error: ' + response.error);
                                            }
                                            // source{{uri:'file:///storage/emulated/0/DCIM/IMG_20161201_125218.jpg'}} 
                                            else {
                                                this.setState({ image: response.uri, });
                                                this.setState({
                                                    avatarSource: {
                                                        uri: response.uri,
                                                        type: 'image/jpg',
                                                        name: 'image.jpg',
                                                    }
                                                })
                                            };

                                        }
                                        );

                                    }}
                                >
                                    <Text style={{ textAlign: 'center', flexWrap: 'wrap', width: '50%' }}>{localization.upladImage}</Text>
                                </TouchableOpacity>
                          */}
                            </View>
       
                            {/* <View style={{ flex: 0.3 }}>
                            <TouchableOpacity
                        style={{
                            borderWidth: 1,
                            borderColor: 'rgba(0,0,0,0.2)',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: 100,
                            height: 100,
                            backgroundColor: '#fff',
                            borderRadius: 100,
                        }}
                        onPress={() => {
                           // debugger;
                            this.setState({ visible: true });
                            //  this.renderModal(true)

                        }}

                    >
                        {this.state.avatarSource ?
                        <Image

                        source={this.state.avatarSource} /> :
                            <Text style={{ textAlign: 'center', flexWrap: 'wrap', width: '45%' }}>{localization.show}</Text>

                        }
                                </TouchableOpacity>


                            </View>
                        */}
                        </View>


                        
                        <Modal
                            style={{ alignSelf: 'center', width: '80%', height: '80%' }}
                            //  backdropColor='white' 
                            isVisible={this.state.visible} >
                            <TouchableOpacity onPress={this._toggleModal}>
                                <Icon name='md-close' style={{ color: 'white' }} />
                            </TouchableOpacity>
                            <View style={{ width: '100%', height: '20%' }}>

                                <Image source={this.state.avatarSource} style={{ width: '70%', height: '70%', flex: 1, alignSelf: 'center' }} />
                            </View>

                        </Modal>

                       
                           

                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            {this.state.errList}

                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ flex: 0.7, flexDirection: 'row' }}>
                                <ListItem>
                                    <CheckBox
                                        onPress={(event) => {
                                            this.setState({ policyChecked: !this.state.policyChecked })
                                        }
                                        }
                                        style={{ backgroundColor: Colors.white }} checked={this.state.policyChecked} color='white' />
                                        <TouchableOpacity
                                        onPress={()=>this.props.navigation.push('policy')}
                                        >

                                    <Text style={{ marginLeft: '2%', color: Colors.white }}>{localization.acceptPolicy}</Text>
                                    </TouchableOpacity>

                                </ListItem>
                            </View>


                            {this.registerCenterButton}
                        </View>
                    </ScrollView>
                    <Toast
                        ref="toast"
                        position='top'
                        positionValue={200}
                        fadeInDuration={750}
                        fadeOutDuration={2000}
                        // opacity={0.8}
                        textStyle={{ color: 'white' }}
                    />
                </Content>
            </Container>

        )
    }

}
const styles = StyleSheet.create({

})
//change
const RegisterCenterForm = reduxForm({
    form: 'RegisterCenter',
    validate
})(RegisterCenter);
const mapStateToProps = (state) => (

    {

        ...state.centersReducers,
        ...state.countryReducer
    }
)
const mapDispatchToProps = (dispatch) => (
    {
        onRegisterCenter: (newCenter) => dispatch(registerCenterAction(newCenter)),
        getAllCountries: () => dispatch(allCountries()),
        getAllNationalities: () => dispatch(allNationalities()),
        getAllCities: (country_id) => dispatch(allCities(country_id)),
        certainCity: (city_id) => dispatch(selectCity(city_id)),
        certainCountry: (country_id) => dispatch(selectCountry(country_id)),
        certainNationality: (nationality_id) => dispatch(selectNationality(nationality_id))


    }
)

export default connect(mapStateToProps, mapDispatchToProps)(RegisterCenterForm);

