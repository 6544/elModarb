import React, { Component } from 'react';
import { View, StyleSheet, Text, FlatList, TouchableHighlight, ActivityIndicator } from "react-native";
import { Container, Tab, Content, Icon, ListItem, Thumbnail, Left, Body, Right, Button, Card, CardItem } from 'native-base';
import { HeaderScreen } from '../../Ui/Header';
import localization from '../../localization/localization';
import { getAllTrainers, getAllTrainersSuccess } from '../../store/Actions/actions/Trainers';
import { connect } from 'react-redux';
import { NewChanges } from '../../Ui/newChangesCard';
import { ContentData } from '../../Ui/Content';
import InternetConnection from '../../helpers/internetConnection';
const dataArray = [{ key: 'a' }, { key: 'b' }];
const uri = "https://facebook.github.io/react-native/docs/assets/favicon.png";
class Consultant extends Component {
    constructor(props) {
        super(props);
       // debugger;
        this.GetAllTrainers();
    }
    dataArray = null;

    connection = new InternetConnection();
    connected = true;

    async GetAllTrainers() {
        this.connected = await this.connection.checkConnection();
        if (this.connected) {
            this.props.getAllTrainers();
        }

    }
    renderDataList() {
        return (
            this.props.loading ?
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <ActivityIndicator />

                </View> :
                <ContentData
                    data={this.dataArray}
                    navigationObject='TrainerDetails' navigation={this.props.navigation}
                />
        )
    }
    renderInvalidData() {
        return (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <AppText text={localization.invalidData} />
                <Icon name="undo" onPress={() => this.GetAllTrainers()} />

            </View>
        )
    }

    render() {
        if (this.props.AllTrainers) {
            this.dataArray = this.props.AllTrainers.data.persons;

        }
        return (
            this.connected ? this.renderDataList() : this.renderInvalidData()
        )
    }
}
const styles = StyleSheet.create({
})
const mapStateToProps = state => {
    return {
        AllTrainers: state.trainersReducers.trainers,
        loading: state.trainersReducers.loading,
        error: state.trainersReducers.error
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getAllTrainers: () => {
            dispatch(getAllTrainers());
        },


    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Consultant);