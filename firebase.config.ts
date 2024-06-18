import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyChK99CVdRMxIeeFaUYNFtT2eI6ZLmcW5Y",
  authDomain: "movie-a906a.firebaseapp.com",
  projectId: "movie-a906a",
  storageBucket: "movie-a906a.appspot.com",
  messagingSenderId: "718971330609",
  appId: "1:718971330609:web:a20351d790282f0153f510",
  measurementId: "G-W0H1N6RZNR"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };