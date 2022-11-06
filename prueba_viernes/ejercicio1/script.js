//1. Crea en una app de firebase una colección con usuarios y permite 
//que se registren con email y pass desde un formulario de registro con HTML y JS. 

// Import the functions you need from the SDKs you need

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
import { getFirestore, doc, setDoc } from 'https://www.gstatic.com/firebasejs/9.13.0/firebase-firestore.js';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTtuYPgEivyrY8Ex1C4w9DQzc-K9jv0eY",
  authDomain: "registro-e1b39.firebaseapp.com",
  projectId: "registro-e1b39",
  storageBucket: "registro-e1b39.appspot.com",
  messagingSenderId: "675015398106",
  appId: "1:675015398106:web:00ed3c1111370f01360be3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase
export const db = getFirestore(app);

document.querySelector('#enviar').addEventListener("click", pasaDatos())

function pasaDatos() {
  var nombre = document.getElementById("nombre").value;
  var pass = document.getElementById("password").value;
  var email = document.getElementById("email").value;

  setDoc(doc(db, "Users", "1111"), {
    Nombre: nombre,
    Email: email,
    paginas: pass
  });

}


