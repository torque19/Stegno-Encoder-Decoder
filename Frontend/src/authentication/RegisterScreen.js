import React, {Component} from 'react';
import {View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView} from 'react-native';
import {CustomHeader} from '../index'

export class RegisterScreen extends Component {
    render() {
        return (
            <SafeAreaView style={{ flex: 1}}>
                <CustomHeader title="Register" navigation={navigation}/>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text>Register Screen</Text>
                </View>
            </SafeAreaView>
         
        );
    }
}