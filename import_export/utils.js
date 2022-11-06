// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getFirestore, collection, getDocs, doc, setDoc, deleteDoc, updateDoc  } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBQtc9YlHt7EmjMBLDpql9FWG7QrXTB4r0",
    authDomain: "ejerciciosie.firebaseapp.com",
    projectId: "ejerciciosie",
    storageBucket: "ejerciciosie.appspot.com",
    messagingSenderId: "388145155412",
    appId: "1:388145155412:web:811e29ddf1a74605618cc1"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const querySnapshot = await getDocs(collection(db, "tasks"));

function createCard(id, task) {
    //<div class="card text-white bg-info mb-6  offset-md-4" style="max-width: 20rem;">
    const principalDiv = document.createElement('div');
    principalDiv.setAttribute("class", "card bg-light mb-3");
    principalDiv.style = "max-width: 20rem;";
    principalDiv.setAttribute("name",id);
    //<div class="card-header">Formulario Tareas</div>
    const headerDiv = document.createElement('div');
    const contentDiv = document.createTextNode("Id: " + id);
    headerDiv.setAttribute("class", "card-header");
    
    headerDiv.appendChild(contentDiv);
    principalDiv.appendChild(headerDiv);
    // <div class="card-body">
    const bodyDiv = document.createElement('div');
    const pTitle = document.createElement("p");
    const pTitleText = document.createTextNode("Title: " + task.title);
    const hr = document.createElement('hr');
    const pDesc = document.createElement("p");
    const pDescText = document.createTextNode("Description: " + task.description);
    
    pTitle.appendChild(pTitleText);
    bodyDiv.appendChild(pTitle);
    bodyDiv.appendChild(hr);
    pDesc.appendChild(pDescText);
    bodyDiv.appendChild(pDesc);
    bodyDiv.appendChild(hr);
    
    
    var input = document.createElement("input");
    input.type = "button";
    input.value = "Borrar Tarea";
    input.setAttribute("name", "delete");
    input.setAttribute("class",id);
    bodyDiv.appendChild(input);

    var input = document.createElement("input");
    input.type = "button";
    input.value = "Actualizar Tarea";
    input.setAttribute("name", "update");
    input.setAttribute("class",id);
    bodyDiv.appendChild(input);

    principalDiv.appendChild(bodyDiv);

    document.body.appendChild(principalDiv);
    const br = document.createElement("br");
    document.body.appendChild(br);
    
}

export function getTasks() {
    querySnapshot.forEach((doc) => {
        createCard(doc.id, doc.data());
    });
}
function generateRandomIdTask(num) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < num; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}
export async function insertTask(task) {
    await setDoc(doc(db, "tasks", generateRandomIdTask(20)), task);
    alert("Insertada la tarea: "+task.title);
}

export async function deleteTask(id){
    await deleteDoc(doc(db, "tasks", id));   
    alert("Borrada la tarea: "+id);
}

async function updateTask(id, newTask){
    await updateDoc(doc(db, "tasks", id), newTask);   
    alert("Actualizada la tarea: "+id);
}

export function recogeDatos() {
   

    //Creo el texto de la ventana emervente.
    const ventana = document.getElementById("actualizar");
    
    let titulo = document.createElement("h3");
    let textoTit = document.createTextNode("¡Atención vas actualizar contenido!");
    titulo.appendChild(textoTit);
    ventana.appendChild(titulo); 

    let parrafo = document.createElement("p");
    let textoPar = document.createTextNode("Añade el campo a continuación y pulsa enviar. Los campos vacíos no se actualizarán.");
    parrafo.appendChild(textoPar);
    ventana.appendChild(parrafo);

    let tituloNuevo = document.createElement("p");
    let textoTN = document.createTextNode("Título Nuevo");
    tituloNuevo.appendChild(textoTN);
    ventana.appendChild(tituloNuevo);

    let br = document.createElement("br");
    ventana.appendChild(br);
    
    let input1 = document.createElement("input");
    input1.setAttribute("id", "tituloNevo");
    ventana.appendChild(input1);

    let br1 = document.createElement("br");
    ventana.appendChild(br1);

    let descrpNueva = document.createElement("p");
    let textoDN = document.createTextNode("Nueva descripción");
    tituloNuevo.appendChild(textoDN);
    ventana.appendChild(descrpNueva);

    let br2 = document.createElement("br");
    ventana.appendChild(br2);

    let input2 = document.createElement("input");
    input2.setAttribute("id", "descripcionNueva");
    ventana.appendChild(input2);

    let br3 = document.createElement("br");
    ventana.appendChild(br3);

    let enviar = document.createElement("button");
    enviar.setAttribute("id", "enviar");
    //enviar.setAttribute("onclick", "actualizar();");
    let textoBt = document.createTextNode("Enviar");
    enviar.appendChild(textoBt);
    ventana.appendChild(enviar);   

}


export function actualizar(id){
    console.log("ENTRA");
    document.getElementById("actualizar").style.visibility="visible";
    let idTitle = document.createElement("p");
    idTitle.setAttribute("id", "idTitle")
    let idText = document.createTextNode(id);
    idTitle.appendChild(idText);
    document.getElementById("actualizar").appendChild(idTitle);

}

export function actualizarDB () {
    console.log("ENTRA en actualizar");
    let idBorrar = document.getElementById("idTitle").innerText
    let newTitle = document.getElementById("tituloNevo");
    let newDescription = document.getElementById("descripcionNueva");
    const newTask = {
        title: newTitle,
        description: newDescription
    }
    updateTask(idBorrar, newTask);
}