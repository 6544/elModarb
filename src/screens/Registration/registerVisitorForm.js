import React, { Component } from 'react'
import { View, Text, ScrollView, ActivityIndicator,TouchableOpacity } from "react-native";
import { Field, reduxForm } from 'redux-form';
import CustomInput from '../../Ui/CustomIput';
import { ListItem, Button, CheckBox, Picker } from 'native-base';
import { CustomPicker } from '../../Ui/customPicker';
import { connect } from "react-redux";
import { allCountries, allNationalities, allCities } from '../../store/Actions/actions/country';
import Mobile from '../../Ui/Mobile';
import { Colors } from '../../assets/colors';
import { CustomButton } from '../../Ui/customButon';
import localization from '../../localization/localization';
import { AppText } from '../../Ui/appText';
import Toast from "react-native-easy-toast";
import { RegisterVisitorRequest } from "../../store/Actions/actions/visitor";
import { LocalStorage } from "../../helpers/localStorage";
import VR from './VR';




const validate = values => {

   // debugger;
    console.log(values);
    const errors = {};
    if (!values.fullname) {
        errors.fullname = localization.required;
    }
    if (!values.email) {
        errors.email = localization.required;
    }
    if (values.email) {
        var emailValidation = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const emailChecked = emailValidation.test(values.email.toLowerCase());
        if (!emailChecked)
            errors.email = localization.emailValidation;
    }
    if (!values.phone) {
        errors.phone = localization.required;

    }
    if (values.phone) {
        if (values.phone.length < 8 && values.phone.length > 15)
            errors.phone = localization.phoneValidation;
        else if (isNaN(values.phone)) {
            errors.phone = localization.mobileValidation
        }

    }
    if (!values.country) {
        errors.country = localization.required;

    }
    if (!values.city) {
        errors.city = localization.required;

    }
    if (!values.nationality) {
        errors.nationality = localization.required;
    }
    if (!values.password) {
        errors.password = localization.required
    }
    if(values.password){
        if(values.password.length<6)
        errors.password=localization.passwordValidation;
    }
    if (!values.confirmPassword) {
        errors.confirmPassword = localization.required
    }
    if (values.confirmPassword && values.password) {
        if (values.confirmPassword !== values.password) {
            errors.confirmPassword = localization.exactPassword;
        }
    }

    return errors;

}
class VisitorComponentForm extends Component {
    state = {

        policyChecked: false,
    }
    countries;
    nationalities;
    cities;
    prefix;
    saveButton;
    errors = [];


    constructor(props) {

        super(props);
       // debugger;

    }
    componentDidMount() {
        this.props.getCountries();
        this.props.getNationalities();
    }



    getCountries(allcountries) {
        this.countries = allcountries.countries.map((item, index) => {
            return (
                <Picker.Item key={item.id} label={item.name_en} value={item}

                />

            )
        })

    }



    getCities = (value, cityPrefix) => {
        this.cities = value.states.map(
            (item, index) => {
                return (
                    <Picker.Item key={item.id} label={item.name_en} value={item.id}

                    />

                )
            }
        ),
            this.prefix = cityPrefix
    }

    getNationalities = (allNationalities) => {

        this.nationalities = allNationalities.nationalities.map(
            (item, index) => {
                return (
                    <Picker.Item key={item.id} label={item.name_en} value={item.id}

                    />

                )
            }
        )
    }
    registerRowPolicy = () => {
        return (
            <View style={{ flex: 1 }}>

                <ScrollView contentContainerStyle={{ flex: 1, height: '100%', width: '100%', justifyContent: 'space-between', flexDirection: 'row', top: '15%' }}>

                    <ListItem style={{ marginTop: '5%' }} itemDivider={false}>
                        <CheckBox onPress={(event) => {
                            this.setState({ policyChecked: !this.state.policyChecked })
                        }
                        }
                            checked={this.state.policyChecked} color='white' />
                            <TouchableOpacity
                            onPress={()=>this.props.navigation.push('policy')}
                            >

                        <Text style={{ marginLeft: '2%', color: Colors.white }}>{localization.acceptPolicy}</Text>
                        </TouchableOpacity>

                    </ListItem>
                    {this.saveButton}


                </ScrollView>
            </View>
        )
    }

    mysubmit = (values) => {
        if (this.state.policyChecked) {
            //  alert("values: " + values);
            this.props.Register({
                name: values.fullname,
                email: values.email,
                prefix: this.prefix,
                phone: values.phone,
                password: values.password,
                confirmPassword: values.confirmPassword,
                countryID: values.country.id,
                stateID: values.city,
                cityID: values.city,
                nationality: values.nationality,
                fcmToken:LocalStorage.token


            })
        }
        else {
            this.refs.toast.show(localization.policyMessage)

        }
    }
    renderInputField = (props) => {
        console.log(props)
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
    renderPickerField = (props) => {
        if (props.input.name == 'country') {
            if (props.input.value) {
                this.props.getcities(props.input.value);
            }
        }
        return (
            <View style={{ flex: 0.4 }}>

                <ListItem>
                    <CustomPicker containerStyle={props.containerStyle} placeholder={props.placeholder}
                        selected={props.input.value}
                        data={props.data}
                        label={props.label}
                        onchangeValue={props.input.onChange} />

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

                    <Mobile value={props.input.value} changeText={props.input.onChange} mobileExtension={props.mobilextension} label={localization.mobileNumber} />

                </ListItem>

                {props.meta.touched &&
                    ((props.meta.error && <AppText style={{ color: Colors.red }} text={props.meta.error} />))}
            </View>

        )
    }


    render() {
        return(
            <VR />
        )
        if (this.props.loading) {
            this.saveButton =
                <ListItem style={{ flex: 0.5,width: 100, height: 100 }}>

                    <ActivityIndicator />
                </ListItem>
        }
        else {
            this.saveButton =
                <ListItem style={{ flex: 0.5, width: 100, height: 200 }}>
                    <CustomButton style={{ marginRight: '5%', flex: 1, borderColor: Colors.black, borderWidth: 0.5, borderRadius: 10 }} text={localization.Register} onPress={this.props.handleSubmit(this.mysubmit)} />
                </ListItem>
        }
        if (this.props.countries) {
            this.getCountries(this.props.countries);
        }

        if (this.props.nationalities) {
            this.getNationalities(this.props.nationalities);

        }
        if (this.props.cities) {
            this.getCities(this.props.cities, this.props.prefix);
        }
        if (this.props.visitor) {
            if (this.props.visitor.status) {
                this.refs.toast.show(this.props.visitor.msg, 2000, () => {
              this.props.navigation.navigate('RegistrationSuccess', { userType: 'visitor' });
                })
            }
            else {
                this.errors = [];
                for (var property in this.props.visitor.data.errors) {
                    this.errors.push(
                        <AppText style={{color:Colors.red}}  text={this.props.visitor.data.errors[property][0]} />
                    )
                }

            }
        }
        return (
            <View>


                <Field type="text" label={localization.name} containerStyle={{ top: '2%' }} name="fullname" component={this.renderInputField} type="text" />
                <Field data={this.nationalities} containerStyle={{ top: '3%' }} label={localization.nationality} name="nationality" component={this.renderPickerField} />

                <Field containerStyle={{ top: '4%' }} label={localization.country} data={this.countries} placeholder={localization.pickCountry} name="country" component={this.renderPickerField} />


                <Field label={localization.city} data={this.cities} placeholder={localization.pickCity} name="city" component={this.renderPickerField} />


                <Field type="text" label={localization.email} name="email" component={this.renderInputField} />


                <Field type="text" name="phone" component={this.renderMobileField} mobilextension={this.prefix} />


                <Field type="text" label={localization.password} secureTextEntry={true} containerStyle={{ top: '2%' }} name="password" component={this.renderInputField} type="text" />

                <Field type="text" name="confirmPassword"
                    label={localization.confirmPassword} secureTextEntry={true} containerStyle={{ top: '2%' }} component={this.renderInputField} type="text" />

                <View>
                    {this.errors}

                </View>


                {this.registerRowPolicy()}


                <Toast
                    ref="toast"
                    position='bottom'
                    positionValue={160}
                    fadeInDuration={750}
                    fadeOutDuration={1000}
                    opacity={0.8}
                    textStyle={{ color: 'white' }}
                />

            </View>



        )

    }
}


const mapStateToProps = (state) => {
    return {
        ...state.visitorReducer,
        ...state.countryReducer
    }
}
const mapDispatchToProps = (dispatch) => {
    return {

        UpdatePrefix: (prefix) => dispatch(updatePrefix(prefix)),
        UpdateState: (stateID) => dispatch(updateState(stateID)),
        Register: (data) => dispatch(RegisterVisitorRequest(data)),
        getCountries: () => dispatch(allCountries()),
        getcities: (country) => dispatch(allCities(country)),
        getNationalities: () => dispatch(allNationalities()),
    }
}


const VisitorForm = reduxForm({
    // a unique name for the form
    form: 'visitor',
    validate

})(VisitorComponentForm)

export default connect(mapStateToProps, mapDispatchToProps)(VisitorForm);