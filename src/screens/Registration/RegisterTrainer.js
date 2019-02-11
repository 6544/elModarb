import React, { Component } from 'react';
import ImagePicker from 'react-native-image-picker';
import CustomInput from '../../Ui/CustomIput';
import { connect } from 'react-redux';
import Mobile from '../../Ui/Mobile';
import { registerTrainerAction } from '../../store/Actions/actions/Trainers';
import { Image, View, StyleSheet, Text, ScrollView, TouchableOpacity, ActivityIndicator, ImageBackground } from "react-native";
import {
    Picker, Left, Right, Label, Textarea, Radio, Button,
    Card, CardItem, List, ListItem, Body, Item, Container, Content, CheckBox, Icon
} from 'native-base';
import { allCountries, allNationalities, allCities, selectCity, selectCountry, selectNationality } from '../../store/Actions/actions/country';
import { Colors } from '../../assets/colors';
import localization from '../../localization/localization';
import { HeaderScreen } from '../../Ui/Header';
import Modal from "react-native-modal";
import { Field, reduxForm } from "redux-form";
import { CustomButton } from '../../Ui/customButon';
import { AppText } from '../../Ui/appText';
const uri = "https://facebook.github.io/react-native/docs/assets/favicon.png";
import { RenderCustomPicker } from '../../Ui/NewcustomPicker';
import { RenderCustomPicker1 } from '../../Ui/NewcustomPicker1';
import { LocalStorage } from '../../helpers/localStorage';
import Toast, { DURATION } from "react-native-easy-toast";
import { Avatar } from '../../Ui/avatar';


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
    debugger;
    const errors = {};
    if (!values.fullname) {
        errors.fullname = localization.required;
    }
    if (!values.sex) {
        errors.sex = localization.required;
    }


    if (!values.country) {
        errors.country = localization.required;
    } if (!values.city) {
        errors.city = localization.required;
    } if (!values.nationality) {
        errors.nationality = localization.required;
    } if (!values.character) {
        errors.character = localization.required;
    } if (!values.credit) {
        errors.credit = localization.required;
    }

    if (!values.trainerField) {
        errors.trainerField = localization.required;
    } if (!values.courses1) {
        errors.courses1 = localization.required;
    }
    if (!values.courses2) {
        errors.courses2 = localization.required;
    }
    if (!values.courses2) {
        errors.courses3 = localization.required;
    }

    if (!values.professionalCard) {
        errors.professionalCard = localization.required;
    } if (!values.email) {
        errors.email = localization.required;
    }
    if (values.email) {
        var emailValidation = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const emailChecked = emailValidation.test(values.email.toLowerCase());
        if (!emailChecked) {
            errors.email = localization.emailValidation;
        }
    }
    if (!values.phone) {
        errors.phone = localization.required;
    }
    if (values.phone) {
        if (values.phone.length < 8 || values.phone.length > 15)
            errors.phone = localization.phoneValidation;
        else if (isNaN(values.phone)) {
            errors.phone = localization.mobileValidation;
        }
    }
    if (!values.password) {
        errors.password = localization.required;
    }
    if (values.password) {
        if (values.password.length < 6)
            errors.password = localization.passwordValidation;
    }
    if (!values.confirmPassword) {
        errors.confirmPassword = localization.required;
    }
    if (values.confirmPassword) {
        if (values.confirmPassword !== values.password)
            errors.confirmPassword = localization.exactPassword;
    }
    return errors;
}
class RegisterTrainer extends Component {

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

    renderMobileField = (props) => {
        return (
            <View style={{ flex: 0.4 }}>

                <ListItem>

                    <Mobile value={props.input.value} changeText={props.input.onChange} mobileExtension={props.mobilextension} label="الجوال" />

                </ListItem>

                {props.meta.touched &&
                    ((props.meta.error && <AppText style={{ color: Colors.red }} text={props.meta.error} />))}
            </View>

        )
    }
    state = {
        visible: false,
        avatarSource: null,
        image: null,
        errList: [],
        policyChecked: false
    }
    constructor(props) {
        super(props);

    }
    componentDidMount() {
        this.props.getAllCountries();
        this.props.getAllNationalities();
    }
    allCountriesLocal;
    allCitiesLocal;
    allgenders;
    allNationalitiesLocal;
    prefix;
    registerButton;

    getAllNeededCountries(countries) {
        this.allCountriesLocal = countries.countries.map((item, index) => {
            return (
                <Picker.Item key={item.id.toString()} label={item.name_en} value={item} />
            )
        })

    }
    _toggleModal = () =>
        this.setState({ visible: !this.state.visible });


    renderTextareaField = (props) => {

        debugger;
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

    renderCard() {
        return (

            <Card>
                <CardItem style={{ backgroundColor: 'white' }}>
                    <Body>
                        <Text style={{ color: 'orange', alignSelf: "center" }}>
                            {localization.registerTrainer}
                        </Text>
                    </Body>
                </CardItem>
            </Card>
        )
    }
    getAllNationalities(nationalities) {
        this.allNationalitiesLocal = nationalities.nationalities.map(item =>
            <Picker.Item key={item.id} label={item.name_en} value={item.id} />)
        
    }
    renderList() {
        return (
            <List>
                <ListItem itemHeader first>
                    <Text style={{ color: 'white' }}>{localization.personalData}</Text>
                </ListItem>

                <Field label={localization.name} name="fullname" containerStyle={{ top: '2%' }} component={this.renderInputField} type="text" />



                <Field label={localization.sex} data={[<Picker.Item value="male" key="0" label="Male" />, <Picker.Item key="1" value="female" label="Female" />]} name="sex" component={RenderCustomPicker} type="text" />


                <Field
                    onchangeValue={(country_id) => {

                        this.prefix = country_id.phonecode;
                        this.props.getAllCities(country_id);

                    }}

                    label={localization.country} data={this.allCountriesLocal} val={64} placeholder={localization.pickCountry} name="country" component={RenderCustomPicker} />


                <Field placeholder={localization.pickCity} containerStyle={{ top: '4%' }} val={194} label={localization.city} data={this.allCitiesLocal} name="city" component={RenderCustomPicker} />



                <Field data={this.allNationalitiesLocal} placeholder="select" val={194} label={localization.nationality} name="nationality" component={RenderCustomPicker1} />

                <Field label={localization.character} name="character" component={this.renderInputField} type="text" placeholder={localization.characterPlaceholder} />


                <ListItem itemHeader first>
                    <Text style={{ color: 'white' }}>{localization.ProfessionalInformation} </Text>
                </ListItem>



                <Field name="credit" label={localization.primaryAccreditation} component={this.renderTextareaField} />

                {/* <Field name="trainerField" label={localization.Areas} component={this.renderTextareaField} /> */}
                <Field name="trainerField" data={this.allNationalitiesLocal} label={localization.Areas} component={RenderCustomPicker} />

                <ListItem>
                    <Label style={{ backgroundColor: 'orange', color: 'white', height: '140%', flex: 0.9 }}>{localization.trainingTours}</Label>
                </ListItem>
                <Field label="1" name="courses1" component={this.renderInputField} type="text" />


                <Field label="2" name="courses2" component={this.renderInputField} type="text" />

                <Field label="3" name="courses3" component={this.renderInputField} type="text" />


                <Field name="professionalCard" label={localization.ProfessionalCard} placeholder={localization.DesignCard} component={this.renderTextareaField} />


                <ListItem itemHeader>
                    <Text style={{ color: 'white' }}>{localization.Meansofcommunication}</Text>
                </ListItem>


                <Field label={localization.email} name="email" component={this.renderInputField} type="text" />

                <Field type="text" name="phone" label={localization.mobileNumber} component={this.renderMobileField} mobilextension={this.prefix} />

                <Field secureTextEntry={true} label={localization.password} name="password" component={this.renderInputField} type="text" />

                <Field secureTextEntry={true} label={localization.confirmPassword} name="confirmPassword" component={this.renderInputField} type="text" />

            </List>
        )
    }
    renderImagePicker() {
        return (
            <View style={{ flexDirection: 'row', width: '90%', justifyContent: 'space-around' }}>
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
                        <Text style={{ textAlign: 'center', flexWrap: 'wrap', width: '50%' }}>{localization.upladImage}</Text>
                    </TouchableOpacity>
                </View>
                {/* <View style={{ flex: 0.4 }}>
                    <Image source={this.state.avatarSource} style={{ height: '40%', width: '70%', alignSelf: 'center', flex: 1 }} />
                </View> */}
                <View style={{ flex: 0.3 }}>
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
                            debugger;
                            this.setState({ visible: true });
                            //  this.renderModal(true)

                        }}

                    >
                        {this.state.avatarSource ? <Image source={this.state.avatarSource} /> :
                            <Text style={{ textAlign: 'center', flexWrap: 'wrap', width: '45%' }}>{localization.show}</Text>

                        }



                    </TouchableOpacity>



                </View>
            </View>
        )
    }
    renderPayment() {
        return (

            <View>

                <ListItem itemHeader first>
                    <Text style={{ color: 'white' }}>{localization.Subscription} </Text>
                </ListItem>
                <Card>
                    <CardItem>
                        <Text style={{ textAlign: 'center', flex: 1 }}>{localization.moneyAmount}</Text>
                    </CardItem>
                    <CardItem style={{ flexDirection: 'row', left: 80, alignContent: 'center', flex: 1 }}>
                        <Left style={{ flexDirection: 'row' }}>
                            <Radio style={{ right: 5 }} />
                            <Text>{localization.months6}</Text>
                        </Left>
                        <Right style={{ flexDirection: 'row' }}>
                            <Radio style={{ right: 5 }} />
                            <Text >{localization.months12}</Text>
                        </Right>
                    </CardItem>
                    <CardItem>
                        <View style={{ flexDirection: 'row' }}>
                            <Radio style={{ right: 7 }} />
                            <Text>{localization.Saudiriyals}</Text>
                        </View>
                    </CardItem>
                    <CardItem>
                        <Button style={{ backgroundColor: 'red' }}><Text style={{ color: "white", textAlign: 'center', flex: 1 }}>{localization.pay}</Text></Button>
                    </CardItem>
                </Card>

            </View>
        )
    }
    renderSignUp() {
        return (
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
                            onPress={() => this.props.navigation.push('policy')}
                        >

                            <Text style={{ marginLeft: '2%', color: Colors.white }}>{localization.acceptPolicy}</Text>
                        </TouchableOpacity>

                    </ListItem>
                </View>
                {this.registerButton}
            </View>
        )
    }
    submitTrainer = (values) => {
        debugger;
        if (this.state.policyChecked) {

            this.props.onRegisterTrainer({
                name: values.fullname,
                sex: values.sex,
                character: values.character,
                trainer_field: values.trainerField,
                professional_card: values.professionalCard,
                phone: values.phone,
                password: values.password,
                confirmPassword: values.confirmPassword,
                email: values.email,
                credit: values.credit,
                courses1: values.courses1,
                courses2: values.courses2,
                courses3: values.courses3,
                image: this.state.image,
                prefix: this.prefix,
                nationality_id: values.nationality,
                country_id: values.country.id,
                city_id: values.city.id,
                fcmToken: LocalStorage.token
            })
        }
        else {
            this.refs.toast.show(localization.policyMessage)

        }
    }

    renderImageSourceModal() {
        return (
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
        )
    }

    render() {
        if (this.props.loadingTrainer) {
            this.registerButton = <ActivityIndicator />
        }
        else {
            this.registerButton =
                <CustomButton style={{ marginRight: '5%', flex: 0.3, borderColor: Colors.black, borderWidth: 0.5, borderRadius: 10 }} text={localization.Register} onPress={this.props.handleSubmit(this.submitTrainer)} />


        }
        if (this.props.countries) {
            this.getAllNeededCountries(this.props.countries);
            console.warn(this.props.countries);

        }

        if (this.props.nationalities){
            this.getAllNationalities(this.props.nationalities);
            // console.warn(this.props.nationalities);

        }

        if (this.props.cities) {
            debugger;
            this.allCitiesLocal = this.props.cities.states.map((item, index) => {
                return (
                    <Picker.item key={item.id} label={item.name_en} value={item} />)
            }
            )
        }


        if (this.props.trainer) {
            this.refs.toast.show(this.props.trainer.msg, 1500, () => {
                new LocalStorage().setVisits({ id: this.props.trainer.data.user.id, num: 0 });
                this.props.navigation.navigate('RegistrationSuccess', { userType: 'trainer' });
            })



        }
        else {
            if (this.props.errorsList) {
                this.state.errList = [];
                debugger;
                if (this.props.errorsList === "TypeError:Network request failed") {
                    this.refs.toast(localization.internetConnection);
                }
                for (let err in this.props.errorsList) {

                    this.state.errList.push(<AppText style={{ color: Colors.red }} text={this.props.errorsList[err][0]} />);
                }
            }
        }


        return (
            <Container style={{ flex: 1, backgroundColor: Colors.lightBlue }}>
                <HeaderScreen navigation={this.props.navigation} />
                <Content contentContainerStyle={{ flex: 1 }}>

                    <ScrollView style={{ backgroundColor: Colors.lightBlue, width: '100%' }}>
                        {this.renderCard()}

                        <Text style={{ textAlign: 'center', width: '90%', color: 'red' }}>{localization.requiredFields}</Text>
                        {this.renderList()}
                        {this.renderImagePicker()}


                        {this.state.errList}

                        {this.renderImageSourceModal()}

                        {this.renderSignUp()}

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
const mapStateToProps = (state) => {

    return {

        ...state.trainersReducers,
        ...state.countryReducer
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onRegisterTrainer: (newTrainer) => dispatch(registerTrainerAction(newTrainer)),
        getAllCountries: () => dispatch(allCountries()),
        getAllNationalities: () => dispatch(allNationalities()),
        getAllCities: (country_id) => dispatch(allCities(country_id)),
        certainCity: (city_id) => dispatch(selectCity(city_id)),
        certainCountry: (country_id) => dispatch(selectCountry(country_id)),
        certainNationality: (nationality_id) => dispatch(selectNationality(nationality_id))


    }
}
const registerTrainerForm = reduxForm({
    form: 'registerTrainer',
    validate
})(RegisterTrainer)

export default connect(mapStateToProps, mapDispatchToProps)(registerTrainerForm);