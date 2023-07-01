// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsxLoU7-nYcnCM_Bnun1MSZiRc-jbo2h4",
  authDomain: "chatx-98b1c.firebaseapp.com",
  projectId: "chatx-98b1c",
  storageBucket: "chatx-98b1c.appspot.com",
  messagingSenderId: "743756124856",
  appId: "1:743756124856:web:e144c85514aa815bda9a4d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);