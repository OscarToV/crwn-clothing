import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "",
  authDomain: "crwn-db-989b2.firebaseapp.com",
  databaseURL: "https://crwn-db-989b2.firebaseio.com",
  projectId: "crwn-db-989b2",
  storageBucket: "crwn-db-989b2.appspot.com",
  messagingSenderId: "961805238122",
  appId: "1:961805238122:web:53b95f935acc2a98b52f13",
  measurementId: "G-L938W95XQ9"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;