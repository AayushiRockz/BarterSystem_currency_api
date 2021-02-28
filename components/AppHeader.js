import React from 'react';

import {View, Text, StyleSheet} from 'react-native';
import {Icon, Badge} from 'react-native-elements';

export default class AppHeader extends React.Component {
    render(){
        return(
            <View style={styles.container}>
           <Icon name='bars' type='font-awesome' color='#e579a6' size={30} containerStyle={{alignItems:'flex-start'}} 
            onPress={() => this.props.navigation.toggleDrawer()}/>       
                <Text style={styles.AppHeader}>Barter System </Text>
                
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container:{
        justifyContent:'space-between',
        alignItems:'flex-start'
    },
    AppHeader:{
        fontSize:40,
        fontFamily:'serif',
        borderWidth:3,
       backgroundColor:'#fff',
       borderRadius:20,
       padding:10,
       margin:10,
      
        
    }
})