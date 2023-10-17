import "firebase/compat/auth";
import FIREBASE_App from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCEEOgn0DleGzfqlrtP689-o3iJdxXQatQ",
    authDomain: "todoapp-fd648.firebaseapp.com",
    projectId: "todoapp-fd648",
    storageBucket: "todoapp-fd648.appspot.com",
    messagingSenderId: "425675895206",
    appId: "1:425675895206:web:62705e2c6b78e957375f67"
};
  
FIREBASE_App.initializeApp(firebaseConfig);
export const FIREBASE_AUTH = FIREBASE_App.auth();
export const FIREBASE_DB = FIREBASE_App.firestore();