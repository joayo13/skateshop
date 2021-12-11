import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

const firebaseConfig = {

    apiKey: "AIzaSyCFE-4fmhp3IIJTxtsi3XaBphVs3RWsnZc",
  
    authDomain: "skateshop-19330.firebaseapp.com",
  
    projectId: "skateshop-19330",
  
    storageBucket: "skateshop-19330.appspot.com",
  
    messagingSenderId: "43993705730",
  
    appId: "1:43993705730:web:179734f3c32f587e67e61b"
  
  };

  firebase.initializeApp(firebaseConfig)

  export default firebase