import React , {Component} from 'react';
import {Header, Icon , Badge} from 'react-native-elements';
import {View,Text} from 'react-native';
import db from '../config'
import firebase from 'firebase';
import {SafeAreaProvider} from 'react-native-safe-area-context';


export default class MyHeader extends Component{
    constructor(props){
        super(props)
        this.state={
          userId : firebase.auth().currentUser.email,
          value:""
        }
      }
    
    getNumberOfUnreadNotifications(){
      db.collection('all_notifications').where('notification_status','==',"unread").where('targeted_user_id','==',this.state.userId)
      .onSnapshot((snapshot)=>{
        var unreadNotifications = snapshot.docs.map((doc) => doc.data())
        this.setState({
          value: unreadNotifications.length
        })
      })
    }

    
 BellIconWithBadge=()=>{
    return(
      <View>
        <Icon name='bell' type='font-awesome' color='#ffffff' size={25}
          onPress={() =>this.props.navigation.navigate('Notification')}/>
         <Badge
          value={this.state.value}
         containerStyle={{ position: 'absolute', top: -4, right: -4 }}/>
      </View>
    )
  }

    render(){
        return(
            <SafeAreaProvider>
            <Header
            placement="left"
            centerComponent={{ text: this.props.title, style: { backgroundColor:'#DC5874',
            color:'#fff',
            fontFamily:'serif',
            fontSize:30,
            alignSelf:'center',
            shadowColor:'#771021' ,
            shadowOffset:{width:2,height:10} ,   
           shadowOpacity:6,
           shadowRadius:30,
           padding:20} }}
            backgroundColor = "#FAC1CC"
            leftComponent={<Icon name='bars' type='font-awesome' color='#ffffff'  onPress={() => this.props.navigation.toggleDrawer()}/>}
            rightComponent={<this.BellIconWithBadge {...this.props}/>}
            
            />

            </SafeAreaProvider>
        )
    }
}