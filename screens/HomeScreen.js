import React, {Component} from 'react';
import {View, Text, TouchableOpacity,  FlatList, StyleSheet} from 'react-native';
import {ListItem} from 'react-native-elements';
import db from '../config';
import AppHeader from '../components/AppHeader';
import MyHeader from '../components/MyHeader';
import firebase from 'firebase'; 


export default class HomeScreen extends Component{
    constructor(){
        super();
        this.state = {
          userName  : firebase.auth().currentUser.email,
          requestedThingsList : [],
        }
    this.requestRef=null
    }

        
  getRequestedThingsList=()=>{
    this.requestRef = db.collection("requested_things")
    .onSnapshot((snapshot)=>{
      var thingsRequested = []
      snapshot.forEach((doc) => {
        thingsRequested.push(doc.data())
      })
      this.setState({requestedThingsList:thingsRequested})
    })
  }


  getIsExchangeRequestActive(){
    
  }
  
  componentDidMount(){
    this.getRequestedThingsList();
}

componentWillUnmount(){
  this.requestRef();
}
 

 


  

    
  render(){
    return(
      <View style={{flex:1}}>
            
         
        <AppHeader/>
        <MyHeader title ="Home"/>
         <Text
               style={{backgroundColor:'#DC5874',
                        color:'#fff',
                        fontFamily:'serif',
                        fontSize:30,
                        alignSelf:'center',
                        shadowColor:'#771021' ,
                        shadowOffset:{width:2,height:10} ,   
                       shadowOpacity:6,
                       shadowRadius:30,
                       padding:20
                       }}
               >Home</Text>
       
      
          {
            this.state.requestedThingsList.length === 0
            ?(
              <View style={{flex:1, fontSize: 20, justifyContent:'center', alignItems:'center'}}>
                <Text style={{ fontSize: 20}}>List of all Barter</Text>
              </View>
            )
            :(
              <FlatList
              style={{flex:1}}
              data={this.state.requestedThingsList}
                keyExtractor={(item, index) => index.toString()}
                
                renderItem={( {item, i} ) =>{
   
                  return (
                    <ListItem
                      key={i}
                      title={item.item_name}
                      subtitle={item.description}
                      style={styles.list }
                      
                     
                      rightElement={
                          <TouchableOpacity style={styles.button}>
                            <Text style={{color:'black', fontSize:20}}>Exchange</Text>
                          </TouchableOpacity>
                        }
                        titleStyle={styles.listText}
                    
                    />
                  )
                }}
              />
            )
          }
       
      </View>
    )
  }
}

const styles = StyleSheet.create({
  subContainer:{
    flex:1,
    fontSize: 20,
    justifyContent:'center',
    alignItems:'center'
  },

    list:{
        color:'cyan',
        borderColor:'blue',
        borderWidth:2,
    },
    button:{
      color:'red',
      backgroundColor:'pink',
      width:100,
      height:50
    },
    listText:{
      color:'black',
      fontWeight:'bold',
      fontSize:20
    }
})