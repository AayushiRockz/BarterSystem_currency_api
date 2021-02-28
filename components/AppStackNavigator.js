import React from 'react'
import {createStackNavigator} from 'react-native-stack';

import UserDetailsScreen from '../screens/UserDetailsScreen';
import AppDrawerNavigator  from '../App'; 

export const AppStackNavigator = createStackNavigator({
Drawer:{
     screen:AppDrawerNavigator,
     navigationOptions:{
         headerShown:false
     },
  ReceiverDetails:{
      screen:UserDetailsScreen,
      navigationOptions:{
          headerShown:false
      }
  }   
 }

},
{
    initialRouteName: 'DonateList'

}
);