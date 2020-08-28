import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

let firebaseConfig = {
    apiKey: "AIzaSyDyTnIGPVUHlpxBE4srD485NzwRhYwLcS4",
    authDomain: "sweat-react.firebaseapp.com",
    databaseURL: "https://sweat-react.firebaseio.com",
    projectId: "sweat-react",
    storageBucket: "sweat-react.appspot.com",
    messagingSenderId: "1068209361311",
    appId: "1:1068209361311:web:5590d6d6a3fe25207dadaa",
    measurementId: "G-SWTBRFHK6S"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampsInSnapshots: true });

  export default firebase;