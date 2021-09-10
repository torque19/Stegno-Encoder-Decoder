import React, {Component} from 'react';
import {View, Text, StyleSheet, SafeAreaView, TouchableOpacity} from 'react-native';
import {CustomHeader} from '../index'
import {ScrollView, TextInput} from "react-native-gesture-handler";

export class DecryptionScreen extends Component {
    render() {
        return(
            <SafeAreaView style={{ flex: 1}}>
            <CustomHeader title="Decryption" isHome={true} navigation={navigation}/>
            <View style={styles.MainContainer}>
                <TextInput
                placeholder={"Plain Text"}
                placeholderTextColor={"rgb(0, 0, 255)"}
                style={styles.txtStyle}/>
    
                <TextInput
                placeholder={"Encryption Key"}
                placeholderTextColor={"rgb(0, 0, 255)"}
                keyboardType={"numeric"}
                style={styles.txtStyle}/> 
                <TouchableOpacity style={{marginTop: 20}}
                 onPress={() => navigation.navigate('DecryptionDetail')}>
                    <Text>Go to Decryption Detail</Text>
                </TouchableOpacity>
            </View>
    
            </SafeAreaView>
            
        );
    }
}
const styles = StyleSheet.create(
    {
     
    MainContainer: 
    {
    flex: 1,
    padding:20,
    marginTop:10
    },

    txtStyle:
    {
        borderBottomWidth:1,
        borderBottomColor:'blue',
        marginBottom:20
    }
});