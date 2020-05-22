import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyA1DXwIWVK9P19zP0A18PPn_r5t7O9EvxQ",
    authDomain: "ayo-ogunseinde.firebaseapp.com",
    databaseURL: "https://ayo-ogunseinde.firebaseio.com",
    projectId: "ayo-ogunseinde",
    storageBucket: "ayo-ogunseinde.appspot.com",
    messagingSenderId: "628164433401",
    appId: "1:628164433401:web:f54bd5b781817273709928",
    measurementId: "G-CWYEDG838J"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase