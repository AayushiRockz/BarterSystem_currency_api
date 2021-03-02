import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {ListItem, Icon} from 'react-native-elements';
import db from '../config';
import firebase from 'firebase';
import MyHeader from '../components/MyHeader';

export default class NotificationScreen extends Component{
    render(){
        return(
            <View>
                <MyHeader title="Notifications"/>
                <Text>
                    NotificationScreen
                </Text>
            </View>
        )
    }
}