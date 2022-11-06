//Me traigo mi db firestore
import { getTasks, insertTask, deleteTask, recogeDatos, actualizar, actualizarDB } from "./utils.js";
//console.log(db);
//Extraigo todos los documentos de tasks y creo tarjetas con ellos
getTasks();
recogeDatos();

//Obtenemos el formdelete y capturamos el submit
const form = document.getElementById("task-form");
form.addEventListener("submit", e => {
    e.preventDefault();
    const task = {
        title: form["task-title"].value,
        description: form["task-description"].value
    }

    insertTask(task);
})


const buttonsCardDDelete = document.getElementsByName("delete");
buttonsCardDDelete.forEach(element => {
    element.addEventListener("click", () => {
        var divDelete = element.parentNode.parentNode;
        document.body.removeChild(divDelete);
        //console.log("Estoy borrando la tarea: "+element.id);
        deleteTask(element.class);
        console.log(element.class);
    })
});

const buttonsCardDUpdate = document.getElementsByName("update");
buttonsCardDUpdate.forEach(element => {
    element.addEventListener("click", () => {
        actualizar(element.class);
        console.log(element.class);
    })
});



const buttonsEnviar = document.getElementById("enviar");
buttonsEnviar.addEventListener("click", () => {
    actualizarDB();
});




