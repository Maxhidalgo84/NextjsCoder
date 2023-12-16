// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import { getStorage} from "firebase/storage";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBW42pe74P38_9rlnB67IsYH3h_UKQp2YQ",
    authDomain: "codrnextjs.firebaseapp.com",
    projectId: "codrnextjs",
    storageBucket: "codrnextjs.appspot.com",
    messagingSenderId: "822457168850",
    appId: "1:822457168850:web:3e3c51dfb7d6481be18e0b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app)
export const auth = getAuth(app)