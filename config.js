

import firebase from 'firebase';

require('@firebase/firestore');

var firebaseConfig = {
  apiKey: "AIzaSyD_K6MnkY1axD-w8KwJeUcqVCk3iCFQol4",
  authDomain: "studysure2.firebaseapp.com",
  projectId: "studysure2",
  storageBucket: "studysure2.appspot.com",
  messagingSenderId: "415387970136",
  appId: "1:415387970136:web:3593c5fe566856c30cf82d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);



  export default firebase.firestore();