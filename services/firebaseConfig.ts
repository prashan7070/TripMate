import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyD...", 
  authDomain: "tripmate.firebaseapp.com",
  projectId: "tripmate",
  storageBucket: "tripmate.appspot.com",
  messagingSenderId: "123...",
  appId: "1:123..."
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);