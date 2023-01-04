import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


export const firebaseConfig = {
  apiKey: "AIzaSyCUGkkpE3KRRbuEbWW0d7hqY6LvFVqmsgA",
  authDomain: "producthunting-b4e79.firebaseapp.com",
  databaseURL: "https://producthunting-b4e79-default-rtdb.firebaseio.com",
  projectId: "producthunting-b4e79",
  storageBucket: "producthunting-b4e79.appspot.com",
  messagingSenderId: "886615090270",
  appId: "1:886615090270:web:9f5ff839ea0efcaad600cf",
  measurementId: "G-NNXEVNDKHV"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
