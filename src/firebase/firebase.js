// Firebase SDK imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtzje0aWFzgpsQUlXZXoL-C4ogYUUp51g",
  authDomain: "estadium-670dc.firebaseapp.com",
  projectId: "estadium-670dc",
  storageBucket: "estadium-670dc.firebasestorage.app",
  messagingSenderId: "844485368492",
  appId: "1:844485368492:web:ff32161884a1a5849c5d09",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

/**
 * Firestore database
 */
export const db = getFirestore(app);
