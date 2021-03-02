import React, {Component} from 'react';
import {View, Text, TextInput, TouchableOpacity,  Alert, StyleSheet} from 'react-native';
import firebase from 'firebase';
import db from '../config';
import AppHeader from '../components/AppHeader';
import MyHeader from '../components/MyHeader';


export default class SettingsScreen extends Component{
    constructor(){
        super();
        this.state={
            firstName:"",
            lastName:"",
            address:"",
            contact:"",
            docId:'',
            emailId:''
        }
    }

    getUserDetails=()=>{
        var email = firebase.auth().currentUser.email;
        db.collection('users').where('email_id',"==", email).get()
        .then(snapshot=>{
            snapshot.forEach(doc =>{
                var data = doc.data()
                this.setState({
                    emailId:data.email_id,
                    firstName:data.first_name,
                    lastName:data.last_name,
                    address:data.address,
                    contact:data.contact,
                    docId:doc.id

                })
            })
        })
    }

    
  updateUserDetails=()=>{
    db.collection('users').doc(this.state.docId)
    .update({
      "first_name": this.state.firstName,
      "last_name" : this.state.lastName,
      "address"   : this.state.address,
      "contact"   : this.state.contact,
    })

    Alert.alert("Profile Updated Successfully")

  }

  componentDidMount(){
    this.getUserDetails()
  }


    render(){
        return(
            <View style={styles.container}>
                    
          
                <AppHeader/>
                <MyHeader title= "Settings"/>
                <Text  style={{backgroundColor:'#DC5874',
                        color:'#fff',
                        fontFamily:'serif',
                        fontSize:30,
                        alignSelf:'center',
                        shadowColor:'#771021' ,
                        shadowOffset:{width:2,height:10} ,   
                       shadowOpacity:6,
                       shadowRadius:30,
                       padding:20
                       }}>
                    Settings
                </Text>
                        <View>
                <TextInput 
                style={styles.inputs}
                 placeholder ={"First Name"}
                 maxLength ={8}
                 onChangeText={(text)=>{
                  this.setState({
                  firstName: text
                })}}
                value={this.state.firstName}
                />

                <TextInput 
                style={styles.inputs}
                placeholder={"Last Name"}
                maxLength ={12}
                onChangeText={(text)=>{
                 this.setState({
                 lastName: text
               })}}
               value={this.state.lastName}
                />


                <TextInput 
                style={styles.inputs}
                placeholder={"contact number" }
                keyboardType={'numeric'}
                maxLength ={15}
                onChangeText={(text)=>{
                 this.setState({
                contact: text
               })}}
               value={this.state.contact}/>

                <TextInput 
                style={styles.inputs}
                placeholder={"address"}
                multiline={true}
                onChangeText={(text)=>{
                 this.setState({
                address: text
               })}}
               value={this.state.address}
                />
                </View>

                <TouchableOpacity style={styles.button} onPress={()=>{this.updateUserDetails()}}>
                <Text
                 style={
                    {
                        fontSize:15,
                        fontFamily:'serif',
                        fontWeight:'300',
                        alignSelf:'center'
                    }
                }>Update</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#F2B8C6',
        flex:1,
        alignItems:'flex-start',
        justifyContent:'space-between'
    },
    inputs:{
        borderWidth:2,
        margin:10,
        borderRadius:50, 
        width:'260%',
        padding:10,
        margin:30,
        backgroundColor:'#F25278',
        color:'#fff',
        shadowColor:'#771021' ,
        shadowOffset:{width:2,height:10} ,   
       shadowOpacity:6,
       shadowRadius:30,
       borderRadius:30,

      

    },
    button:{
        shadowColor:'black' ,
        shadowOffset:{width:2,height:10} ,   
       shadowOpacity:6,
       shadowRadius:30,
       borderRadius:30,
       width:'20%',
       height:'10%',
       backgroundColor:'#E27092',
       justifyContent:'center',
       padding:10,
       marginBottom:40,
    }
})