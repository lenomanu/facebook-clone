// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB8TRktuUncTgHnQpVRQH5Yyl8o3Nm7SUA",
    authDomain: "facebook-clone-72663.firebaseapp.com",
    projectId: "facebook-clone-72663",
    storageBucket: "facebook-clone-72663.appspot.com",
    messagingSenderId: "956267993202",
    appId: "1:956267993202:web:89164e66f67169296ecaeb",
    measurementId: "G-DYV0CB63RV"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export {auth, provider}
export default db