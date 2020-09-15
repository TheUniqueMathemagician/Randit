const firebaseConfig = {
  apiKey: "AIzaSyAyKoIlilICjbFP2SlmzjeW0dMujKzCK40",
  authDomain: "global-apps-85e5e.firebaseapp.com",
  databaseURL: "https://global-apps-85e5e.firebaseio.com",
  projectId: "global-apps-85e5e",
  storageBucket: "global-apps-85e5e.appspot.com",
  messagingSenderId: "850648437345",
  appId: "1:850648437345:web:983dd01f9fc05027219020",
  measurementId: "G-B02PVFCXJV"
};

// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

import Vue from "vue";

Vue.prototype.$firebase = firebase;

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
