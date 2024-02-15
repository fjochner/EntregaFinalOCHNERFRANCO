import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCRBlUKbnHE61fxyJtZXfy4d6361iol-vQ",
  authDomain: "e-commerce-ochnerfranco.firebaseapp.com",
  projectId: "e-commerce-ochnerfranco",
  storageBucket: "e-commerce-ochnerfranco.appspot.com",
  messagingSenderId: "983566888679",
  appId: "1:983566888679:web:3c2dbc815d0f68e7ef7c42"
};

initializeApp(firebaseConfig);

const db = getFirestore()

export default db
