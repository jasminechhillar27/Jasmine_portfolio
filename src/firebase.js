import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBppPDGlYGcfMp-QWgMM34izkYFjVE1X9s",
  authDomain: "jc-portfolio-21dc5.firebaseapp.com",
  projectId: "jc-portfolio-21dc5",
  storageBucket: "jc-portfolio-21dc5.appspot.com",
  messagingSenderId: "74682162661",
  appId: "1:74682162661:web:7f4747dc8629312916a30c"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
