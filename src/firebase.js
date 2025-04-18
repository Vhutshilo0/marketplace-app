// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyARhENfv3zqycs6fJ9eKeghGDAQPDJsgY4",
  authDomain: "marketplace-app-a9fe9.firebaseapp.com",
  projectId: "marketplace-app-a9fe9",
  storageBucket: "marketplace-app-a9fe9.firebasestorage.app",
  messagingSenderId: "403653055770",
  appId: "1:403653055770:web:0f59cd7646bfcc949dc8a3",
  measurementId: "G-8SMH1SWCH0"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);