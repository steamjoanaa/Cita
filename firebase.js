import { initializeApp } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDiTP24x8PE6p5Hz9MgRlGOdOYGtx44_Xc",
  authDomain: "cita-a5b95.firebaseapp.com",
  projectId: "cita-a5b95",
  storageBucket: "cita-a5b95.firebasestorage.app",
  messagingSenderId: "1063683929185",
  appId: "1:1063683929185:web:d1c6984ebff9c60e3da620"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
