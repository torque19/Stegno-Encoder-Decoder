import React, {Component} from 'react';
import {View, Text, StyleSheet, SafeAreaView, TouchableOpacity} from 'react-native';
import {CustomHeader} from '../index'

export class SettingsScreen extends Component {
    render() {
        return(
            <SafeAreaView style={{ flex : 1}}>
                <CustomHeader title="Settings" isHome={true} navigation={navigation}/>
                <View>
                <Text>SettingScreen</Text>
                <TouchableOpacity style={{marginTop: 20}}
                 onPress={() => navigation.navigate('SettingsDetail')}>
                    <Text>Go to Settings Detail</Text>
                </TouchableOpacity>
            </View>
            </SafeAreaView>
            
        );
    }
}