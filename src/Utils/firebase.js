// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDHB5B9cUySZUBH3Z3zzr1l8o-6ppAOHOE",
    authDomain: "netflix-gpt-4184d.firebaseapp.com",
    projectId: "netflix-gpt-4184d",
    storageBucket: "netflix-gpt-4184d.firebasestorage.app",
    messagingSenderId: "446307121982",
    appId: "1:446307121982:web:e4ac9b61145e87f0750a6f",
    measurementId: "G-2BLVYMH397"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth()