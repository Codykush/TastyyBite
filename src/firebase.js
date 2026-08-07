import { initializeApp } from "firebase/app";

import {
  getAuth,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB6HQnTGtMIKlYY1x_J-VAn128z9QEAFKE",
  authDomain: "av-messenger-c4f87.firebaseapp.com",
  projectId: "av-messenger-c4f87",
  storageBucket: "av-messenger-c4f87.firebasestorage.app",
  messagingSenderId: "524924431778",
  appId: "1:524924431778:web:0f3a564547a652ee59d6fb",
  measurementId: "G-0EP7L7JEJH",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const googleProvider = new GoogleAuthProvider();