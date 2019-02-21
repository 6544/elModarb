import React, { Component } from 'react';
import { StyleSheet, Text, FlatList, TouchableHighlight, ActivityIndicator, View } from "react-native";
import { Content, Thumbnail, Card, CardItem, Right, Button } from 'native-base';
import { connect } from 'react-redux';
import { getAllCenters } from '../../store/Actions/actions/centers';
import { NewChanges } from '../../Ui/newChangesCard';
import { ContentData } from '../../Ui/Content';
import InternetConnection from '../../helpers/internetConnection';

class Centers extends Component {
    constructor(props) {
        super(props)

        this.GetAllCenters();
    }
    dataArray = null;
    connection = new InternetConnection();
    connected = true;

    async  GetAllCenters() {
        this.connected = await this.connection.checkConnection();
        if (this.connected) {
            this.props.getAllCenters();
        }
    }

    renderDataList() {
        return (
            this.props.loading ?
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <ActivityIndicator />

                </View> :

                <ContentData data={this.dataArray}
                    navigationObject='CenterDetails' navigation={this.props.navigation}
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
        if (this.props.AllCenters) {
            this.dataArray = this.props.AllCenters.data.persons;

        }
        return (
            this.connected ? this.renderDataList() :this.renderInvalidData()
        
        )
    }
}
const styles = StyleSheet.create({
})

const mapStateToProps = state => {
    return {
        AllCenters: state.centersReducers.centers,
        loading: state.centersReducers.loading,
        error: state.centersReducers.error
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getAllCenters: () => {
            dispatch(getAllCenters());
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Centers);