import React, {Component} from 'react';
import {View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView} from 'react-native';
import Evilicon from 'react-native-vector-icons/EvilIcons';

export class CustomDrawerContent extends Component {
    render() {
        return(
            <SafeAreaView style={{flex: 1}}>
                <View style={{height: 150, alignItems: 'center', justifyContent: 'center'}}>
                    <Evilicon name="user" size={200}/>
                </View>
                <ScrollView style={{marginLeft: 5}}>
                    <TouchableOpacity style={{marginTop: 20}} onPress={() => props.navigation.navigate('MenuTab')}>
                        <Text> Menu Tab</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginTop: 20}} onPress={() => props.navigation.navigate('Notifications')}>
                        <Text>Notifications</Text>
                    </TouchableOpacity>
                    
                </ScrollView>
            </SafeAreaView>
        )
    }
}