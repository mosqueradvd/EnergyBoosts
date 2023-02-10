import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBOL04MVBpvmkjh22UFUy6KaaE0EHQnLb8",
  authDomain: "maxxyourself-fb307.firebaseapp.com",
  projectId: "maxxyourself-fb307",
  storageBucket: "maxxyourself-fb307.appspot.com",
  messagingSenderId: "120815732584",
  appId: "1:120815732584:web:4a67ba4ffab17f00ec38dd",
  measurementId: "G-0HE0V2WYVT",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage();
