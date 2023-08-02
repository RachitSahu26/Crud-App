// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBj_Wh8K9r8c58Epq1qT-4BbEhV2Sk5qjs",
  authDomain: "vite-contact-f4e7c.firebaseapp.com",
  projectId: "vite-contact-f4e7c",
  storageBucket: "vite-contact-f4e7c.appspot.com",
  messagingSenderId: "1083555394505",
  appId: "1:1083555394505:web:7039c44ddea0364961ee18"
};

// Initialize Firebase
 export const app = initializeApp
 (firebaseConfig);
 export const db=getFirestore(app);