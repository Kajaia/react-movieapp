// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-A5HUToLB1wr-71Bi-uAxv2V01sZayrQ",
  authDomain: "movieapp-8c062.firebaseapp.com",
  projectId: "movieapp-8c062",
  storageBucket: "movieapp-8c062.firebasestorage.app",
  messagingSenderId: "373532858913",
  appId: "1:373532858913:web:51dce9c34a943b8876a160",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
