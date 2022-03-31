import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyDY1dqWokYDxiOeQLX3twiFdSVaLwDyIFM",
    authDomain: "unichat-77409.firebaseapp.com",
    projectId: "unichat-77409",
    storageBucket: "unichat-77409.appspot.com",
    messagingSenderId: "745484016414",
    appId: "1:745484016414:web:19db80a0cf0e81123a870f"
  }).auth();