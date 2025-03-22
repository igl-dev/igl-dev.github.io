// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCAEf4Rcn_WZLb9L0p_b4CicpO9PWaRlI",
  authDomain: "integrated-gaming-leagues.firebaseapp.com",
  projectId: "integrated-gaming-leagues",
  storageBucket: "integrated-gaming-leagues.firebasestorage.app",
  messagingSenderId: "50304558274",
  appId: "1:50304558274:web:4a3bdad0cfb2b6893d475b",
  measurementId: "G-FX585KK7F3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { analytics };