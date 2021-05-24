import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/storage';
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
  // Add Config Here
};

// Initialize Firebase
try {
	firebase.initializeApp(firebaseConfig);
  firebase.firestore();
  firebase.analytics();
  firebase.storage();
	console.log('Firebase Initialized');
} catch (err) {
	console.log('Error Initializing Firebase');
}

export default firebase;
