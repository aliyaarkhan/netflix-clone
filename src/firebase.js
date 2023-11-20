import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyDdSVT35CrWVarsqFssZiipbE3wvJgDMY8",
  authDomain: "netflix-clone-79ac0.firebaseapp.com",
  projectId: "netflix-clone-79ac0",
  storageBucket: "netflix-clone-79ac0.appspot.com",
  messagingSenderId: "992004315080",
  appId: "1:992004315080:web:c760adcb0182a80d46d2fd"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth()

export { auth };
export default db;