// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEUlLCHWs2DT5dSdG3wKSTbV30L6Adxow",
  authDomain: "mountain-treks-project.firebaseapp.com",
  projectId: "mountain-treks-project",
  storageBucket: "mountain-treks-project.firebasestorage.app",
  messagingSenderId: "454837204488",
  appId: "1:454837204488:web:731115ef13f433e81483bd"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);
 export default auth;