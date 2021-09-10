import React, {Component} from 'react';
import {View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView} from 'react-native';

export class LoginScreen extends Component {
    render() {
        return(
            <SafeAreaView style={{ flex: 1}}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text>Login Screen!</Text>
                    <TouchableOpacity style={{marginTop: 20}} onPress={() => navigation.navigate('HomeApp')}>
                        <Text>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginTop: 20}} onPress={() => navigation.navigate('Register')}>
                        <Text>Register</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        );
    }
}