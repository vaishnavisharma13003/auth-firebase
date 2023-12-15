import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAMsuuMHjr_05K7YEcHA3pgN5NXMKFmvCU",
  authDomain: "fir-auth-6222e.firebaseapp.com",
  projectId: "fir-auth-6222e",
  storageBucket: "fir-auth-6222e.appspot.com",
  messagingSenderId: "883808005132",
  appId: "1:883808005132:web:2accb9c40ca853da9d1229",
  measurementId: "G-RNBD42WP0P",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { app, auth };
