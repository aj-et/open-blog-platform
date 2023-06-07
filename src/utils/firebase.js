// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    // Put the stuff from trello
    
    apiKey: "AIzaSyA6f8g0W-M6oX9iPtPemI5CeKPLQU5kpFA",
    authDomain: "open-blog-platform-db.firebaseapp.com",
    projectId: "open-blog-platform-db",
    storageBucket: "open-blog-platform-db.appspot.com",
    messagingSenderId: "388254177894",
    appId: "1:388254177894:web:05bc6a15cef3265cd42ba7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

