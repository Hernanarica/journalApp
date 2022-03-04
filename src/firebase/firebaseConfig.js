import firebase from "firebase";
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
	apiKey: "AIzaSyCTAsl6dmkLJkMPWN7SHZIRi6VzPjPTW9I",
	authDomain: "react-journal-app-ef863.firebaseapp.com",
	projectId: "react-journal-app-ef863",
	storageBucket: "react-journal-app-ef863.appspot.com",
	messagingSenderId: "23781344435",
	appId: "1:23781344435:web:664436b39054851a741cc6"
};

firebase.initializeApp(firebaseConfig);

const db                 = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, db, googleAuthProvider };