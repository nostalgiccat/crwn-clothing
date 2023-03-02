import { initializeApp } from 'firebase/app'; 
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyAbqTIrhcl_QQWa8qdKTdFNcXyAgWZOiMA",
    authDomain: "crwn-clothing-db-f3bcb.firebaseapp.com",
    projectId: "crwn-clothing-db-f3bcb",
    storageBucket: "crwn-clothing-db-f3bcb.appspot.com",
    messagingSenderId: "880830368778",
    appId: "1:880830368778:web:112d32796b4e6c6e8763f3"
  };

  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider(); 

  provider.setCustomParameters({
    prompt: "select_account"
  });

  export const auth = getAuth(); 
  export const signInWithGooglePopup = () => signInWithGooglePopup(auth, provider);