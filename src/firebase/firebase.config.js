// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDXe3FPHLQQIxXlEpTB45AefZNNymuUmuE",
    authDomain: "auth-firebase-context-ta-a3610.firebaseapp.com",
    projectId: "auth-firebase-context-ta-a3610",
    storageBucket: "auth-firebase-context-ta-a3610.appspot.com",
    messagingSenderId: "284746604997",
    appId: "1:284746604997:web:285baf1ac5449e81292bac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app