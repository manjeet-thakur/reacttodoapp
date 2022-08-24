import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyAIndXsX5P_AboHXnAoByQUMO58txIV9h8",
    authDomain: "todo-firebase-3b11f.firebaseapp.com",
    projectId: "todo-firebase-3b11f",
    storageBucket: "todo-firebase-3b11f.appspot.com",
    messagingSenderId: "1072477290823",
    appId: "1:1072477290823:web:bd68ba8c8a3fb843b10c62",
    measurementId: "G-XB9C6JK09K"
};

export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);