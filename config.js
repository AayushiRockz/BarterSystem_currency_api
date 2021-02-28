import firebase from 'firebase';
require('@firebase/firestore');
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCvf7sipuWc7ZH874RFDX1Q63WNffAizLs",
    authDomain: "bartersystemapp-b5159.firebaseapp.com",
    projectId: "bartersystemapp-b5159",
    storageBucket: "bartersystemapp-b5159.appspot.com",
    messagingSenderId: "526765750800",
    appId: "1:526765750800:web:b09d44546188369e05a895"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  export default firebase.firestore();