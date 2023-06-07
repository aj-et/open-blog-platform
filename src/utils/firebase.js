// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// const process = require(".//.env")


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    // Put the stuff from trello

    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId:process.env.PROJECT_ID,
    storageBucket: process.env.STORQAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID


};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Initialize Firebase Authentication and get a reference to the service

const auth = getAuth(app);

export {auth, app, db};

