import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBI1yMfLOH9rbssJpidkIhCm3kJPqcwxLQ",
  authDomain: "movietok-6b40a.firebaseapp.com",
  projectId: "movietok-6b40a",
  storageBucket: "movietok-6b40a.appspot.com",
  messagingSenderId: "940143361481",
  appId: "1:940143361481:web:35545e8efe294d5146fc18",
  measurementId: "G-JDRB44DDXT"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const db = getFirestore(app);

export { auth, provider, db };