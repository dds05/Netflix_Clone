
import firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyCh00zuRr33dUZ8fd3a8eBY5XIrejsWBpc",
  authDomain: "netflix-clone-ab303.firebaseapp.com",
  projectId: "netflix-clone-ab303",
  storageBucket: "netflix-clone-ab303.appspot.com",
  messagingSenderId: "501021284793",
  appId: "1:501021284793:web:3634ca64e5e0d80b2fbe68"
};

const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth=firebase.auth();
export {auth};
export default db;