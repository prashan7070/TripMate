import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDdaAbv_t0dDwjcd3YW5L_bwdsAAjAg67k",
  authDomain: "tripmate-ed4ae.firebaseapp.com",
  projectId: "tripmate-ed4ae",
  storageBucket: "tripmate-ed4ae.firebasestorage.app",
  messagingSenderId: "325452194688",
  appId: "1:325452194688:web:a00807f2fcff0f73085765"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);