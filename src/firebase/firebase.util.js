import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCvHCO_MDRNErVfI45zoxDRUp30VcXD21s',
  authDomain: 'crwn-db-a1acb.firebaseapp.com',
  projectId: 'crwn-db-a1acb',
  storageBucket: 'crwn-db-a1acb.appspot.com',
  messagingSenderId: '803270022759',
  appId: '1:803270022759:web:1c19a4d121f3d0afe026c2',
};

// Initialize Firebase
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
