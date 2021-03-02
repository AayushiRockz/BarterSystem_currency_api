
import React, { Component } from 'react';
import { StyleSheet, Text, View ,Image} from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import WelcomeScreen from './screens/WelcomeScreen';
import {AppTabNavigator} from './components/AppTabNavigator';
import UserDetailsScreen from './screens/UserDetailsScreen';
import {AppDrawerNavigator} from './components/AppDrawerNavigation';

export default class App extends Component {
  render(){
    return(
      
    <AppContainer/>
    )
  }
}



// switch navigator it has welcome screen , the drawer and tabs
const switchNavigator = createSwitchNavigator({
  Welcome:{screen: WelcomeScreen},
  Drawer:{screen: AppDrawerNavigator},
  Tabs:{screen:AppTabNavigator},

})

// AppContainer
const AppContainer =  createAppContainer(switchNavigator);

