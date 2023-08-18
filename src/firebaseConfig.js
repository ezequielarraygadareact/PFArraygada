import { getFirestore } from "firebase/firestore"
import { initializeApp } from "firebase/app"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4JRhnjsonWNBziLu8To1B0G6diggh3c8",
  authDomain: "veterinaria-peyret.firebaseapp.com",
  projectId: "veterinaria-peyret",
  storageBucket: "veterinaria-peyret.appspot.com",
  messagingSenderId: "514791540644",
  appId: "1:514791540644:web:99ee5726af4db2cbaaa331"
};
 
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const dat = getFirestore(app)
