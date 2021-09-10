import React, {Component} from 'react';
import {View, Text, StyleSheet, SafeAreaView, TouchableOpacity} from 'react-native';
import {CustomHeader} from '../index'

export class SettingsScreenDetail extends Component {
    render() {
        return(
            <SafeAreaView style={{ flex : 1}}>
                <CustomHeader title="SettingsDetail" navigation={navigation}/>
                <View>
                <Text>SettingScreen</Text>
            </View>
            </SafeAreaView>
            
        );
    }
}