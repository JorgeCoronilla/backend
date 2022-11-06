 // Import the functions you need from the SDKs you need
 
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
 import { getFirestore, collection, getDocs, doc, setDoc, deleteDoc  } from 'https://www.gstatic.com/firebasejs/9.13.0/firebase-firestore.js';

 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyDALsnRqLv_IeX2mX4aNF3ru5xoHCchpK0",
   authDomain: "libros-4a374.firebaseapp.com",
   projectId: "libros-4a374",
   storageBucket: "libros-4a374.appspot.com",
   messagingSenderId: "572242892137",
   appId: "1:572242892137:web:10415ee2511704c3dd99f8"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
// Initialize Firebase
export const db = getFirestore(app);
export const querySnapshot = await getDocs(collection(db, "tasks")); 
//await setDoc(doc(db, "tasks", generateRandomIdTask(20)), task); 

await setDoc(doc(db, "libros", "243"), {
    titulo: "Rayuela",
    autor: "Julio Cortázar",
    paginas: 123
 });


