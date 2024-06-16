// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYrNOJ1QA-GlPXPvyc6nLP6W15jTI_qMc",
  authDomain: "movietok-11d87.firebaseapp.com",
  projectId: "movietok-11d87",
  storageBucket: "movietok-11d87.appspot.com",
  messagingSenderId: "91232167614",
  appId: "1:91232167614:web:7e20cca0f17061a5b020ef",
  measurementId: "G-J9FJLJ3EWR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); 