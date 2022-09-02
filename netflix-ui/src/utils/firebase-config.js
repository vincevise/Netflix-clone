 import {getAuth} from 'firebase/auth'
import { initializeApp } from "firebase/app"; 
 
 const firebaseConfig = {
  apiKey: "AIzaSyCFGJpl-2pzWcKreArXumAEjMyHyCIZF84",
  authDomain: "react-netflix-clone-3ed42.firebaseapp.com",
  projectId: "react-netflix-clone-3ed42",
  storageBucket: "react-netflix-clone-3ed42.appspot.com",
  messagingSenderId: "895223281366",
  appId: "1:895223281366:web:7616c382f8378e72e3bb77",
  measurementId: "G-0MKJZPKWCB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 

export const firebaseAuth = getAuth(app);