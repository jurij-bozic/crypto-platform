import { getApp, getApps, initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVLy92WQ4CwZFIPjYk_YD5LcTKjGybzJI",
  authDomain: "rpg-tasks-auth01.firebaseapp.com",
  projectId: "rpg-tasks-auth01",
  storageBucket: "rpg-tasks-auth01.appspot.com",
  messagingSenderId: "485190344334",
  appId: "1:485190344334:web:898d33e8275bc8fc4033df"
};

// Initialize Firebase for SSR
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()

// Initialize Firebase services
const firestore = getFirestore(app)
const auth = getAuth(app)

export { app, firestore, auth }