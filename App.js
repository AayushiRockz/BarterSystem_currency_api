
import React, { Component } from 'react';
import { StyleSheet, Text, View ,Image} from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import WelcomeScreen from './screens/WelcomeScreen';
import ExchangeScreen from './screens/ExchangeScreen';
import HomeScreen from './screens/HomeScreen';
import UserDetailsScreen from './screens/UserDetailsScreen';
import MyBarterScreen from './screens/MyBarterScreen';
import SettingsScreen from './screens/SettingsScreen';
import CustomSideBarMenu from './components/CustomSideBarMenu';
import { createBottomTabNavigator } from 'react-navigation-tabs'
import {createDrawerNavigator} from 'react-navigation-drawer';
import NotificationScreen from './screens/NotificationScreen';
import {createStackNavigator} from 'react-navigation-stack';

export default class App extends Component {
  render(){
    return(
      
    <AppContainer/>
    )
  }
}

// Tab Navigator

const AppTabNavigator = createBottomTabNavigator({
  HomeScreen: {screen: HomeScreen},
  Exchange: {screen: ExchangeScreen},
},
{
  defaultNavigationOptions: ({navigation})=>({
    tabBarIcon: ()=>{
      const routeName = navigation.state.routeName;
      if(routeName === "HomeScreen"){
        return(
          <Image
          source={require("./assets/home.png")}
          style={{width:50, height:31}}
        />
        )

      }
      else if(routeName === "Exchange"){
        return(
          <Image
          source={require("./assets/add.png")}
          style={{width:50, height:31,}}
        />)

      }
    }
  })
}
);

// Drawer : has settings and tabs 
export const AppDrawerNavigator = createDrawerNavigator({
  Home:{
    screen: AppTabNavigator
  },
  Settings:{
    screen:SettingsScreen
  },
 MyBarters:{
    screen: MyBarterScreen
  },
  Notification:{
    screen: NotificationScreen
  },
},
{
  contentComponent: CustomSideBarMenu
},
{
  initialRouteName:'Home'
}
)


// switch navigator it has welcome screen , the drawer and tabs
const switchNavigator = createSwitchNavigator({
  Welcome:{screen: WelcomeScreen},
  Drawer:{screen: AppDrawerNavigator},
  Tabs:{screen:AppTabNavigator},

})

// AppContainer
const AppContainer =  createAppContainer(switchNavigator);

