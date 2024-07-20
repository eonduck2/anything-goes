// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJNGbkGGKxOzAjobjN77kDRJGL-ZyWd74",
  authDomain: "anything-goes-d5a37.firebaseapp.com",
  databaseURL:
    "https://anything-goes-d5a37-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "anything-goes-d5a37",
  storageBucket: "anything-goes-d5a37.appspot.com",
  messagingSenderId: "56698650903",
  appId: "1:56698650903:web:62d4e008cc4cff50f1b752",
  measurementId: "G-ZL1RR5168T",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
