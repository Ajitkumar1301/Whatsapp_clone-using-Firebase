// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from 'firebase';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtqKGJVHOW3UR4B0NICMwLPl9tD6CQFfo",
  authDomain: "whatsapp-clone-b9db4.firebaseapp.com",
  projectId: "whatsapp-clone-b9db4",
  storageBucket: "whatsapp-clone-b9db4.appspot.com",
  messagingSenderId: "868027757956",
  appId: "1:868027757956:web:1691b54fecf3a98fdcd9d1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db=app.firestore();

export default db;