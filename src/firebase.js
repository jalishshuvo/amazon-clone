import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyC2bCYbzfDO0VjwXL8i4FLKEf0V60nPprM",
  authDomain: "clone-jalish.firebaseapp.com",
  databaseURL: "https://clone-jalish.firebaseio.com",
  projectId: "clone-jalish",
  storageBucket: "clone-jalish.appspot.com",
  messagingSenderId: "81833423321",
  appId: "1:81833423321:web:30227991ad53c76b7f69c8",
  measurementId: "G-N4SF7DQ9H8",
});

// Authentication
const auth = firebase.auth();

export { auth };
