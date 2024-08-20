// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCXuytqx0676MrFPrYLHthksil5Sp4Du2o",
  authDomain: "react-netflix-ui-clone-1a6ee.firebaseapp.com",
  projectId: "react-netflix-ui-clone-1a6ee",
  storageBucket: "react-netflix-ui-clone-1a6ee.appspot.com",
  messagingSenderId: "1085322902613",
  appId: "1:1085322902613:web:9c843ec18ebedfab4428dc",
  measurementId: "G-4QGY2Y5X1L"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
