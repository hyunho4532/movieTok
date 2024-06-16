import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAYrNOJ1QA-GlPXPvyc6nLP6W15jTI_qMc",
  authDomain: "movietok-11d87.firebaseapp.com",
  projectId: "movietok-11d87",
  storageBucket: "movietok-11d87.appspot.com",
  messagingSenderId: "91232167614",
  appId: "1:91232167614:web:7e20cca0f17061a5b020ef",
  measurementId: "G-J9FJLJ3EWR"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };