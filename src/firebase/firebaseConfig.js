import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCn3uqbALQsnVdEjY4Kgx-Bevx_LgxTa_k",
  authDomain: "pf-react-dc9d7.firebaseapp.com",
  projectId: "pf-react-dc9d7",
  storageBucket: "pf-react-dc9d7.appspot.com",
  messagingSenderId: "764298886844",
  appId: "1:764298886844:web:2e6b5de0842913d5fe5ab9"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);