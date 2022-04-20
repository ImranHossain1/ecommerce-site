// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDANaCfgvi1Ty9uvJz-nReSBxy9OwFzoB4",
  authDomain: "ema-john-updated.firebaseapp.com",
  projectId: "ema-john-updated",
  storageBucket: "ema-john-updated.appspot.com",
  messagingSenderId: "279159395091",
  appId: "1:279159395091:web:5a44be6aa41a90aaf780e6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;