// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBe53XAIjCXxEe1eHttwPFIU9sYEVNYmJE",
  authDomain: "contacts-app-5443c.firebaseapp.com",
  projectId: "contacts-app-5443c",
  storageBucket: "contacts-app-5443c.appspot.com",
  messagingSenderId: "423467408964",
  appId: "1:423467408964:web:ff301b5c5726eb316e2611"
};

// Initialize Firebase
 export  const app = initializeApp(firebaseConfig);
 export const db=getFirestore(app);