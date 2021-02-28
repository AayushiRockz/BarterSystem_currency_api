import React, {Component} from 'react';
import {View, Text} from 'react-native';
import db from '../config';
import  firebase from 'firebase'; 

export default class UserDetailsScreen extends Component{
    constructor(){
        super();
        this.state={
            userId:firebase.auth().currentUser.email
        }
    }

    getUserDetaisls=()=>{
        db.collection('users').where('email_id',"==",this.state.userId).get()
        .then(snapshot=>{
            snapshot.forEach(doc=>{
                var data = doc.data()
                this.setState({
                    userName: data.first_name,
                    contact:data.contact,
                    userAddress:doc.address

                })
            })
        })
    }

    render(){
        return(
            <View>
                <Text>
                    UserDetailsScreen
                </Text>
            </View>
        );
    }
}