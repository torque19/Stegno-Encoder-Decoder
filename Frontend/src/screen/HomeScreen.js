import React, {Component} from 'react';
import {View, Text, StyleSheet, SafeAreaView, TouchableOpacity} from 'react-native';
import {CustomHeader} from '../index'
import Icon from 'react-native-vector-icons/FontAwesome';

export class HomeScreen extends Component {
    render() {
        return(
            <SafeAreaView style={{flex: 1}}>
                <CustomHeader title="Home" isHome={true} navigation={navigation} />
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <Text>HomeScreen</Text>
                    <TouchableOpacity 
                    style={{marginTop: 20}}
                    onPress={() => navigation.navigate('HomeDetail')}>
                        <Text>Go to Home Detail</Text>
                    </TouchableOpacity>
                    <Icon name ="rocket" size={30}/>
                </View>
            </SafeAreaView>
            
        );
    }
}