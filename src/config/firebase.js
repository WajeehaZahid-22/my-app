import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyD9u6z9V0KmRp2by3viS6DOkmF561jlR4s",
  authDomain: "doctor-appointement-c0c45.firebaseapp.com",
  projectId: "doctor-appointement-c0c45",
  storageBucket: "doctor-appointement-c0c45.firebasestorage.app",
  messagingSenderId: "849425148976",
  appId: "1:849425148976:web:85b80bf2f64a8f84b051f5",
  measurementId: "G-8MGVTZP3Z2"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
