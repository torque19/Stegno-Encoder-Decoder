import React, {Component} from 'react';
import {View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView} from 'react-native';
import IconFeather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

export class CustomHeader extends Component {
    render() {
        return (
            <View style={{flexDirection: 'row', height: 50}}>
                <View style={{flex: 1, justifyContent: 'center'}}>
                     {
                         isHome?
                         <TouchableOpacity onPress={() => navigation.openDrawer()}>
                             <View style={{ flex: 1, justifyContent: 'center'}}>
                             <IconFeather style={{marginLeft: 10}} name="menu" size={30}/>
                         </View>
                         </TouchableOpacity>
                         :
                         <TouchableOpacity style={{flexDirection: 'row', alignItems:'center'}}
                         onPress={() => navigation.goBack()}>
                             <View style={{ flex: 1, justifyContent: 'center'}}>
                                 <Ionicons style={{marginLeft: 10}} name="ios-chevron-back" size={30}/>
                             </View>
                         </TouchableOpacity>
                     }
                </View>
                <View style={{ flex: 1.5, justifyContent: 'center'}}>
                    <Text style={{textAlign: 'center'}}>{title}</Text>
                </View>
                <View style={{ flex: 1}}></View>
 
            </View>
 
         );
    }
}
