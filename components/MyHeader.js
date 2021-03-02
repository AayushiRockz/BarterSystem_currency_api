import React , {Component} from 'react';
import {Header} from 'react-native-elements';
import {View,Text} from 'react-native';
import {Icon} from 'react-native-elements';
import {SafeAreaProvider} from 'react-native-safe-area-context';


export default class MyHeader extends Component{
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
            
            />

            </SafeAreaProvider>
        )
    }
}