import React, { Component } from 'react';
import { View, StyleSheet, Text } from "react-native";
import { Container, Tab, Tabs, ScrollableTab } from 'native-base';
import Activities from './Activities';
import Centers from './Marakez';
import localization from '../../localization/localization';
import TrainingOpp from './TrainingOpp';
import Consultant from './mostsharen';
import Trainers from './trainers';
import ScrollableTabView, { DefaultTabBar, } from 'react-native-scrollable-tab-view';
import { Colors } from '../../assets/colors';

class TabsList extends Component {
    constructor(props) {
        ;
        super(props);
    }
    render() {
        return (
            <ScrollableTabView tabBarActiveTextColor="white" tabBarInactiveTextColor={Colors.black} tabBarBackgroundColor={Colors.lightBlue}
                initialPage={0}
                renderTabBar={() => <DefaultTabBar />}>
                <Tab tabLabel={localization.Trainers}>
                    <Trainers navigation={this.props.navigation} />
                </Tab>
                <Tab tabLabel={localization.Consultant} >
                    <Consultant navigation={this.props.navigation} />
                </Tab>
                
                <Tab tabLabel={localization.Centers}>
                    <Centers navigation={this.props.navigation} />
                </Tab>

                <Tab tabLabel={localization.TrainingOpp}>
                    <TrainingOpp navigation={this.props.navigation} />
                </Tab>







            </ScrollableTabView>
        )
    }
}
const styles = StyleSheet.create({
})

export default TabsList;