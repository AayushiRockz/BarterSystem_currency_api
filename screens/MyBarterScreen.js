import React, {Component} from 'react';
import {View, Text ,StyleSheet, FlatList} from 'react-native';
import {Icon,Card, ListItem} from 'react-native-elements';
import db from '../config';
import firebase from 'firebase';

import MyHeader from '../components/MyHeader';

export default class MyBarterScreen extends React.Component{
    constructor(){
        super();
        this.state={
            userId: firebase.auth().currentUser.email,
            userName:"",
            allBarters:[]
        }
    }

    addBarters=(userId)=>{
        db.collection("users").where("email_id","==", userId).get()
        .then(
            (snapshot)=>{
                snapshot.forEach((doc)=>{
                    this.setState({
                       userName:doc.data().first_Name+" "+doc.data().last_name
                    })
                })
            }
        )

    }


    getAllBarters=()=>{
      var request=  db.collection("requested_things").get("email_id","==",this.state.userId)
      .onSnapshot((snapshot)=>{
          var allDonations =[];
          snapshot.docss.map((doc)=>{
              var data = doc.data();
              data["doc_id"] = doc.id;
          })
      })
    }
    keyExtractor = (item, index) => index.toString();

    renderItem=({item,i})=>{
        <ListItem
            key={i}
            title={item.item_name}

            
        />
    }
    render(){
        return(
            <View>
                    
              <MyHeader title="My Barters"/>

                <View >
             {this.state.allBarters===0 ?

           (  <Text>My Barters</Text>)
             :(
                <FlatList
                data={this.state.allBarters}
                keyExtractor={this.keyExtractor}
                renderItem={this.renderItem}
                />

             )
             
             
             }
                </View>
            </View>
        )

    }
}


const styles = StyleSheet.create({
    container:{
        flex:1,
       
    }
})