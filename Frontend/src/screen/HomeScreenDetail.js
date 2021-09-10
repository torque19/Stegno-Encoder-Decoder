import React, {Component} from 'react';
import {View, Text, StyleSheet, SafeAreaView, TouchableOpacity} from 'react-native';
import {CustomHeader} from '../index'

export class HomeScreen extends Component {
    render() {
        return(
            <SafeAreaView style={{flex: 1}}>
                <CustomHeader title="HomeDetail" navigation={navigation}/>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <Text>HomeScreen</Text>
                </View>
            </SafeAreaView>
            
        );
    }
}