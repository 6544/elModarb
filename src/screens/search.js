import React, { Component } from 'react';
import { View, Platform, StyleSheet,ActivityIndicator, Text, FlatList, TouchableHighlight, ScrollView } from "react-native";
import { Container, Tab, Content, Icon, ListItem, Thumbnail, Left, Body, Right, Button, Form, Picker, Item, Input, CheckBox, Radio, Card, Toast, List } from 'native-base';
import localization from '../localization/localization';
import { connect } from 'react-redux';
import { search } from '../store/Actions/actions/Search';
import { allCountries, allCities, allCitiesOfState } from '../store/Actions/actions/country';
import { CustomButton } from '../Ui/customButon';
import { HeaderWithoutButtons } from '../Ui/headerWithoutButtons';
import { Colors } from '../assets/colors';
import RadioButton from 'radio-button-react-native';

const dataArray = [{ key: 'a' }, { key: 'b' }];
const uri = "https://facebook.github.io/react-native/docs/assets/favicon.png";
const errMsg = "All Fields are required *";

class Search extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            selectedName: false,
            selectedPlace: false,
            name: null, type: null,
            country_id: null,
            city_id: null,
            state_id: null,
            pickerDisabled: true,
            value: null,
            // allCountriesLocal: null,
            dataArray: null
        };
        props.getAllCountries();
    }
    allCountriesLocal = null;
    allCitiesLocal = null;
    allCitiesOfStateLocal = null;


    getAllNeededCountries(countries) {
        if (countries != null) {


            this.allCountriesLocal = countries.countries.map((item, index) => {

                return (<Picker.item key={item.id} label={item.name_en} value={item} />)


            });
        }


    }



    isNotNull(type, name, ...params) {

        let err = false;
        let arr = [];
        (name === null && type == "name") ? err = true : arr.push(name);
        (params === null && type == "place") ? err = true : arr.push(params);
        arr.push(type);

        if (err)
            alert('Please fill all fields !');

        else {
            if (type == "name")
                this.props.search({ name: this.state.name, type: this.state.type, });

            else if (type == "place")
                this.props.search({ country_id: this.state.country_id, city_id: this.state.city_id, state_id: this.state.state_id, type: this.state.type, });
        }
    }

    render() {

        if (this.props.countries) {
           // debugger;
            this.getAllNeededCountries(this.props.countries);
        }

        if (this.props.cities) {
            if (this.props.cities != null) {
                this.allCitiesLocal = this.props.cities.states.map((item, index) => {
                    return (
                        <Picker.item key={item.id} label={item.name_en} value={item} />)
                })

            }

        }

        if (this.props.citiesOfState) {
            if (this.props.citiesOfState != null) {
                this.allCitiesOfStateLocal = citiesOfState.cities.map((item, index) => {
                    return (
                        <Picker.item key={item.id} label={item.name_ar} value={item} />)
                })
            }
        }

       // debugger;

        if (this.props.trainer) {
           // debugger;
            if (this.props.trainer.length != 0)
                this.props.navigation.navigate('SearchResults', { dataArray: this.props.trainer, objectData: this.state.type == "place" ? 'CenterDetails' : 'TrainerDetails' })
            else {
                console.log("empty")
                alert('SORRY!! NO RESULTS FOR YOUR SEARCH')
            }
            //    Toast.show({
            //     text: "",
            //     buttonText: "Close",
            //     type: "warning", duration: 3000
            //   })
        }
        return (
            <Container style={{ flex: 1, backgroundColor: Colors.lightBlue }}>
                <HeaderWithoutButtons navigation={this.props.navigation} page={null} />
                <Content style={{ flex: 1 }}>


                    <Text style={{ textAlign: 'center', fontSize: 25 }}>{localization.search}</Text>
                    {/* <View style={{ flex: 1, justifyContent: 'space-evenly', flexDirection: 'row', alignSelf: 'center', width: '80%', backgroundColor: 'white' }}> */}
                    {/* <View style={{flex:1,justifyContent:'flex-start',alignItems:'flex-start'}}> */}
                    <List>

                        <ListItem  >
                        <Left>
                                <RadioButton currentValue={this.state.value} value={0} onPress={
                                    (value) => {
                                        if (value == 0)

                                            this.setState({ type: "name", selectedPlace: false, pickerDisabled: true, selectedName: true, value: value })
                                    }
                                }>

                                </RadioButton>
                            </Left>
                            
                            <Body>

                                <Input placeholder="مجال التدريب"
                                    value={this.state.name}
                                    
                                    style={{ backgroundColor: Colors.white, flex: 1,width:'550%',marginRight:'70%',alignSelf:'center',textAlign:'right' }}
                                    onChangeText={(text) => {

                                        console.log(text);
                                        this.setState({ name: text })
                                    }} />
                            </Body>
                            <Right/>
                           
                         
                            {/* <Radio
                            color={"orange"}
                            // style={{flex:0.2}}
                            selectedColor={"orange"}
                            selected={this.state.selectedName}
                            onPress={() => {debugger;  }}
                        />
                     */}



                            {/* <Icon name="search" />  */}




                        </ListItem>

                        {/* </View> */}

                        {/* <View style={{ flex: 1, flexDirection: 'row', alignSelf: 'center', width: '80%', top: 10, backgroundColor: 'white' }}> */}
                        {/* <Radio
                            color={"#f0ad4e"}
                            // style={{right:40,backgroundColor:'white'}}

                            // style={{flex:0.2}}
                            selectedColor={"#f0ad4e"}
                            selected={this.state.selectedPlace}
                            onPress={() => { this.setState({ type: "place", selectedPlace: true, pickerDisabled: false, selectedName: false }) }}
                        /> */}
                        <ListItem>
                            <Left>
                                <RadioButton
                                    currentValue={this.state.value} value={1} onPress={(value) => {
                                        if (value == 1)
                                            this.setState({ type: "place", selectedPlace: true, pickerDisabled: false, selectedName: false, value: value })
                                    }}
                                />
                            </Left>

                            <Body>

                                <Picker
                                    mode="dropdown"
                                    style={{ backgroundColor: Colors.white, width: '165%' ,flex: 1,marginRight:'95%',alignSelf:'center' }}
                                    onValueChange={(country_id) => {

                                        console.log(country_id);
                                        this.props.getAllCities(country_id);
                                        this.setState({ country_id: country_id });
                                    }}
                                    selectedValue={this.state.country_id} //el mafrod teb2a label

                                    placeholder={localization.pickCountry}>
                                    {this.allCountriesLocal}
                                </Picker>
                            </Body>

                        </ListItem>
                    </List>

                    {/* </View> */}
                    <Picker style={{ display: this.state.pickerDisabled ? 'none' : 'flex', backgroundColor: 'white', top: 10, alignSelf: 'center', width: '80%' }}
                        mode="dropdown"

                        onValueChange={(city_id) => {

                            console.log(city_id);
                            this.props.getAllCitiesOfState(city_id);

                            this.setState({ city_id: city_id });
                        }}
                        selectedValue={this.state.city_id} //el mafrod teb2a label
                        placeholder={localization.pickCity}>
                        {this.allCitiesLocal}
                    </Picker>

                    <Picker
                        mode="dropdown"
                        style={{ display: this.state.pickerDisabled ? 'none' : 'flex', backgroundColor: 'white', top: 15, alignSelf: 'center', width: '80%' }}
                        onValueChange={(state_id) => {

                            console.log(state_id);

                            this.setState({ state_id: state_id });
                        }}
                        selectedValue={this.state.state_id} //el mafrod teb2a label
                        placeholder={localization.pickCity}>
                        {this.allCitiesOfStateLocal}
                    </Picker>


                    <View style={{ flex: 0.9 }}>

                      {this.props.loading?<ActivityIndicator/>:  <CustomButton text={localization.search} style={{ flex: 1, alignSelf: 'center', width: '75%',height:60, top: 20, justifyContent: 'center', backgroundColor: 'red' }} onPress={() => {
                           // debugger;
                            this.isNotNull(this.state.type, this.state.name, this.state.city_id, this.state.country_id, this.state.state_id);
                        }} />
                    }
                    </View>



                </Content>

            </Container>


        )
    }
}
const styles = StyleSheet.create({
})
const mapStateToProps = (state) => {

    return {

        ...state.searchReducer,
        ...state.countryReducer

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        search: (newObject) => dispatch(search(newObject)),
        getAllCountries: () => dispatch(allCountries()),
        getAllCities: (country_id) => dispatch(allCities(country_id)),
        getAllCitiesOfState: (state_id) => dispatch(allCitiesOfState(state_id)),



    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);