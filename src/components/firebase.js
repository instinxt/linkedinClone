
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAotwu7JrBoseDE93Evgi9OpzvCia7Fj2A",
    authDomain: "linkedin-clone-gh.firebaseapp.com",
    projectId: "linkedin-clone-gh",
    storageBucket: "linkedin-clone-gh.appspot.com",
    messagingSenderId: "609347092127",
    appId: "1:609347092127:web:06f9c8171772b6ed632caa",
    measurementId: "G-XJ5DR7B7M9"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();


  export {db, auth};