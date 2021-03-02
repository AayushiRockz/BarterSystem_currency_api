import React from 'react';

import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomeScreen from '../screens/HomeScreen';
import ExchangeScreen from '../screens/ExchangeScreen';
import {Image} from 'react-native';

export const AppTabNavigator = createBottomTabNavigator({
    HomeScreen: {
        screen: HomeScreen,
        navigationOptions:{
            tabBarIcon:<Image source={require('../assets/home.png')} style={{width:40, height:30}}/>,
            
        }
    
    },
    Exchange: {
        screen: ExchangeScreen,
        navigationOptions:{
            tabBarIcon:<Image source={require('../assets/add.png')} style={{width:40, height:30}}/>
        }
    },
});
