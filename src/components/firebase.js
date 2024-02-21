
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
  apiKey: "AIzaSyAotwu7JrBoseDE93Evgi9OpzvCia7Fj2A",
  authDomain: "linkedin-clone-gh.firebaseapp.com",
  projectId: "linkedin-clone-gh",
  storageBucket: "linkedin-clone-gh.appspot.com",
  messagingSenderId: "609347092127",
  appId: "1:609347092127:web:06f9c8171772b6ed632caa",
  measurementId: "G-XJ5DR7B7M9"
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