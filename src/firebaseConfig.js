// functions/firebaseConfig.js (o donde prefieras)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDAKkr66_hhfQDBaJfWZtW5uhel_iIEiVE",
    authDomain: "fundacionkawsay-a8cbe.firebaseapp.com",
    projectId: "fundacionkawsay-a8cbe",
    storageBucket: "fundacionkawsay-a8cbe.firebasestorage.app",
    messagingSenderId: "768504277945",
    appId: "1:768504277945:web:70b289801c39a82b9b2468",
    measurementId: "G-V8RXCZXR65"
  };

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
