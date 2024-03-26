import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA3Dea2voHo7Ym78_W64sqIqvohfTvsIh0",
  authDomain: "dashb-a74f3.firebaseapp.com",
  projectId: "dashb-a74f3",
  storageBucket: "dashb-a74f3.appspot.com",
  messagingSenderId: "909740896960",
  appId: "1:909740896960:web:41bf296445dcbd3822b325",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
