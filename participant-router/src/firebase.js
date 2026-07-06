// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPTBurlEknmdhicT79_OyTBd6rTrUXQcw",
  authDomain: "it4216-research-project.firebaseapp.com",
  projectId: "it4216-research-project",
  storageBucket: "it4216-research-project.firebasestorage.app",
  messagingSenderId: "878472407199",
  appId: "1:878472407199:web:7f9d29c1627f58b93e5aaa",
  measurementId: "G-3H3X5704JX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };