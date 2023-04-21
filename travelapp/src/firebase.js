// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMsUPQXAa4BYVHCMgEYD-xOHmXtm6e5co",
  authDomain: "soen357-journi.firebaseapp.com",
  projectId: "soen357-journi",
  storageBucket: "soen357-journi.appspot.com",
  messagingSenderId: "316679562757",
  appId: "1:316679562757:web:aadf5f153864dcfcb41e6c"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app)

const db = getFirestore(app)

export { app, auth, db }
