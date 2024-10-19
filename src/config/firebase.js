import { initializeApp } from "firebase/app";
import {getAuth , GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAxUrHBCco2zSKovsT2YriKb9AeijP2Iic",
  authDomain: "my-app-c9fcc.firebaseapp.com",
  projectId: "my-app-c9fcc",
  storageBucket: "my-app-c9fcc.appspot.com",
  messagingSenderId: "950984606503",
  appId: "1:950984606503:web:a956ea7272a5ee1be69f02",
  measurementId: "G-L9N50MJKZ1"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const googleProvider=new GoogleAuthProvider()
export const db = getFirestore(app);