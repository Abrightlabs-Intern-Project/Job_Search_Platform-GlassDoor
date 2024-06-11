// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCE9ORi0mOPP8UF9VlkV9gncSnxLkC-DEU",
  authDomain: "jobsearch-a18ed.firebaseapp.com",
  projectId: "jobsearch-a18ed",
  storageBucket: "jobsearch-a18ed.appspot.com",
  messagingSenderId: "114821173703",
  appId: "1:114821173703:web:02ca9b321bf125f0e209e2",
  measurementId: "G-KQGL4MJDER"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db=getFirestore(app);
export default app;