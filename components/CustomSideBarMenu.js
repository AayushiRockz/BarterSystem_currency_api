import  React, {Component} from 'react';
import { View , TouchableOpacity, StyleSheet, Text} from 'react-native';
import {Avatar} from 'react-native-elements';
import * as ImagePicker from "expo-image-picker";
import {DrawerNavigatorItems} from 'react-navigation-drawer';
import firebase from 'firebase';
import db from '../config';

export default class CustomSideBarMenu extends Component{
  state = {
    userId: firebase.auth().currentUser.email,
    image: "#",
    name: "",
    docId: "",
  };

  selectPicture = async () => {
    const { cancelled, uri } = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!cancelled) {
      this.uploadImage(uri, this.state.userId);
    }
  };

  uploadImage = async (uri, imageName) => {
    var response = await fetch(uri);
    var blob = await response.blob();

    var ref = firebase
      .storage()
      .ref()
      .child("user_profiles/" + imageName);

    return ref.put(blob).then((response) => {
      this.fetchImage(imageName);
    });
  };

  fetchImage = (imageName) => {
    var storageRef = firebase
      .storage()
      .ref()
      .child("user_profiles/" + imageName);

    // Get the download URL
    storageRef
      .getDownloadURL()
      .then((url) => {
        this.setState({ image: url });
      })
      .catch((error) => {
        this.setState({ image: "#" });
      });
  };

  getUserProfile() {
    db.collection("users")
      .where("email_id", "==", this.state.userId)
      .onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.setState({
            name: doc.data().first_name + " " + doc.data().last_name,
            docId: doc.id,
            image: doc.data().image,
          });
        });
      });
  }

  componentDidMount() {
    this.fetchImage(this.state.userId);
    this.getUserProfile();
  }

    render(){
        return(
            <View style={{flex:1}}>
              <View
          style={{
            flex: 0.3,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#ea2598",
          }}
        >
          <Avatar
            rounded
            source={{
              uri: this.state.image,
            }}
            size={"large"}
            onPress={() => this.selectPicture()}
            showEditButton
          />

          <Text
            style={{
              fontWeight: "300",
              fontSize: 20,
              color: "#fff",
              padding: 10,
            }}
          >
            {this.state.name}
          </Text>
        </View>
        <View style={{ flex: 0.6}}>
        <DrawerNavigatorItems {...this.props}  />
      </View>
      <View  style={{flex:1}}>
        <TouchableOpacity
          style={styles.logOutButton}
          onPress={() => {
            this.props.navigation.navigate("Welcome");
            firebase.auth().signOut();
          }}
        >
        <Text style={styles.buttonText}>Log out</Text>
        </TouchableOpacity>
      </View>
      </View>
        )
    }
}


const styles = StyleSheet.create({
    logOutButton:{
        borderWidth:2,
        width:'50%',
        height:'10%',
        backgroundColor:'pink',
        alignSelf:'baseline',
        alignItems:'center',
        borderRadius:50,
        marginTop:350,
        padding:10,
        shadowColor:'grey' ,
        shadowOffset:{width:2,height:5} ,   
       shadowOpacity:4,
       shadowRadius:20,
       borderRadius:30,
        

    },
    buttonText:{
        fontFamily:'serif',
        fontSize:20,
        alignSelf:'center'
    }
})