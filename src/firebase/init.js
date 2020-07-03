import firebase from 'firebase/app'
import 'firebase/firestore'
  
  var firebaseConfig = {
    apiKey: "AIzaSyDUE0A-g79FzdQv4E9wgo1DbWe3hYw2aYw",
    authDomain: "faces-cca94.firebaseapp.com",
    databaseURL: "https://faces-cca94.firebaseio.com",
    projectId: "faces-cca94",
    storageBucket: "faces-cca94.appspot.com",
    messagingSenderId: "692987863479",
    appId: "1:692987863479:web:ab8c4f0bce6d17d2dfc832",
    measurementId: "G-7M9TTPZ3BM"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  
//   firebase.initializeApp(firebaseConfig);
  
// export firestore database
export default firebaseApp.firestore()