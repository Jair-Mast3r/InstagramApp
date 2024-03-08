// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfHdL9PjoWw1uD8mzSrVqFksLVw_euPB8",
  authDomain: "instagramapp-1776b.firebaseapp.com",
  projectId: "instagramapp-1776b",
  storageBucket: "instagramapp-1776b.appspot.com",
  messagingSenderId: "590268031367",
  appId: "1:590268031367:web:0f71be1a987c0b8f9db322"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const firestore = getFirestore(app);

export const storage = getStorage(app);