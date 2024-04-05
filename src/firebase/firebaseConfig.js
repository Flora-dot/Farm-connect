import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_API_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_API_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_API_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_API_FIREBASE_MESSENGER_SENDER_ID,
  appId: process.env.REACT_API_FIREBASE_APP_ID,
  measurementId: process.env.REACT_API_FIREBASE_MEASUREMENT_ID,
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export {auth,}