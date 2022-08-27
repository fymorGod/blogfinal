import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAukw0Yi9cWxI5D-ygIUqDLkD6JaOFMtVg",
    authDomain: "blog-fylip.firebaseapp.com",
    projectId: "blog-fylip",
    storageBucket: "blog-fylip.appspot.com",
    messagingSenderId: "614223154167",
    appId: "1:614223154167:web:4f81584695153a36233cf2"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };