import React , {Component} from 'react';
import {Header} from 'react-native-elements';
import {View,Text} from 'react-native';
import {Icon} from 'react-native-elements';


export default class MyHeader extends Component{
    render(){
        return(
            <Header
            placement="left"
            centerComponent={{ text: this.props.title, style: { color: '#90A5A9', fontSize:20,fontWeight:"bold", } }}
            backgroundColor = "#eaf8fe"
            leftComponent={<Icon name='bars' type='font-awesome' color='#ffffff'  onPress={() => this.props.navigation.toggleDrawer()}/>}

            />
        )
    }
}