import firebase from "firebase";
import "firebase/storage";

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCWlOw-V8QF-uNYVOiypSuOVIG4EeHno-Y",
    authDomain: "halo-44d20.firebaseapp.com",
    projectId: "halo-44d20",
    storageBucket: "halo-44d20.appspot.com",
    messagingSenderId: "272087636538",
    appId: "1:272087636538:web:dd0f5d8180330769e33303",
    measurementId: "G-WBEMR719X6"
  };

  const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const storage = firebase.storage();

export { auth, db, storage };