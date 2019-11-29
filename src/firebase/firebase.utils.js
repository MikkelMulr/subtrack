import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyCLbK8bAWAsmxTM46nUD8e4980sN0QA4S4',
	authDomain: 'subtrack-8870f.firebaseapp.com',
	databaseURL: 'https://subtrack-8870f.firebaseio.com',
	projectId: 'subtrack-8870f',
	storageBucket: 'subtrack-8870f.appspot.com',
	messagingSenderId: '349636004913',
	appId: '1:349636004913:web:d94e8dba23b8f75ace9910',
	measurementId: 'G-1ZEKZ62EHK'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
