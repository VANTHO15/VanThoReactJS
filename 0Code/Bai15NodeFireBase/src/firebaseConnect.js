import firebase from 'firebase/app';
import "firebase/database";
const firebaseConfig = {
    apiKey: "AIzaSyDmyI0l3WHZxG8ia-iJQCH_xTTBqvqtggU",
    authDomain: "notefirebasereactjs.firebaseapp.com",
    databaseURL: "https://notefirebasereactjs-default-rtdb.firebaseio.com",
    projectId: "notefirebasereactjs",
    storageBucket: "notefirebasereactjs.appspot.com",
    messagingSenderId: "803436215767",
    appId: "1:803436215767:web:4affd839292a3fc18f9f92"
  };
  var noteData = firebase.initializeApp(firebaseConfig);
  export default noteData;