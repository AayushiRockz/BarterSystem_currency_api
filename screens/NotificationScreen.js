import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {ListItem, Icon} from 'react-native-elements';
import db from '../config';
import firebase from 'firebase';

export default class NotificationScreen extends Component{
    render(){
        return(
            <View>
                <Text>
                    NotificationScreen
                </Text>
            </View>
        )
    }
}