
import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  serverTimestamp,
  doc,
  orderBy,
  limit,
  onSnapshot,
  query,
} from 'firebase/firestore';
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyBpuXMorotbstMgkNmg4fNze5296_Leaeg",
  authDomain: "li-clone-build.firebaseapp.com",
  projectId: "li-clone-build",
  storageBucket: "li-clone-build.appspot.com",
  messagingSenderId: "588938970348",
  appId: "1:588938970348:web:bece2b8c57c8122c9c51c9",
  measurementId: "G-EYNJWPGWJ0"
};

// init firebase app
initializeApp(firebaseConfig);

// init services
const db = getFirestore();
const auth = getAuth();

export {
  db,
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  serverTimestamp,
  doc,
  auth,
  orderBy,
  limit,
  onSnapshot,
  query,
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
};