/************************************************
 * GESTIÓN DINÁMICA DEL DOM + LOCAL STORAGE
 * Semana 3
 ************************************************/

/* ============================
    2 – SELECCIÓN
============================ */

const inputNota = document.getElementById("notaInput");
const botonAgregar = document.querySelector("#agregarBtn");
const lista = document.getElementById("listaNotas");

// Verificamos en consola
console.log("Input:", inputNota);
console.log("Botón:", botonAgregar);
console.log("Lista:", lista);

/* ============================
    5 – MEMORIA
============================ */

// Arreglo que guarda las notas en memoria
let notas = [];

// Si hay datos guardados, los recuperamos
if (localStorage.getItem("notas")) {
  notas = JSON.parse(localStorage.getItem("notas"));
  console.log("Notas cargadas:", notas.length);
  renderizarNotas();
}

/* ============================
    3 – AGREGAR NOTAS
============================ */

botonAgregar.addEventListener("click", () => {

  const texto = inputNota.value;

  // Validar que no esté vacío
  if (texto === "") {
    alert("Escribe una nota");
    return;
  }

  // Agregar al arreglo
  notas.push(texto);

  // Guardar en Local Storage
  localStorage.setItem("notas", JSON.stringify(notas));
  console.log("Nota agregada:", texto);

  // Renderizar
  renderizarNotas();

  // Limpiar y enfocar
  inputNota.value = "";
  inputNota.focus();
});

/* ============================
   FUNCIÓN PARA MOSTRAR NOTAS
============================ */

function renderizarNotas() {

  // Limpiar lista
  lista.innerHTML = "";

  // Recorrer arreglo
  notas.forEach((nota, index) => {

    // Crear li
    const li = document.createElement("li");
    li.textContent = nota;

    // Botón eliminar
    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar";

    // Evento eliminar
    btnEliminar.addEventListener("click", () => {
      eliminarNota(index);
    });

    // Insertar en el DOM
    li.appendChild(btnEliminar);
    lista.appendChild(li);
  });
}

/* ============================
    4 – ELIMINAR NOTAS
============================ */

function eliminarNota(index) {

  console.log("Nota eliminada:", notas[index]);

  // Eliminar del arreglo
  notas.splice(index, 1);

  // Actualizar Local Storage
  localStorage.setItem("notas", JSON.stringify(notas));

  // Volver a renderizar
  renderizarNotas();
}
