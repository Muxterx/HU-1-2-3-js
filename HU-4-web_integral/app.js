/************************************************
 * MINI APP CRUD – DOM + LOCAL STORAGE + FETCH
 * Autor: Santiago Rendón Sierra
 ************************************************/

/* ============================
   TASK 1 – SELECCIÓN DOM
============================ */

const nombreInput = document.getElementById("nombreInput");
const precioInput = document.getElementById("precioInput");
const agregarBtn = document.getElementById("agregarBtn");
const syncBtn = document.getElementById("syncBtn");
const lista = document.getElementById("lista");

console.log(nombreInput, precioInput, agregarBtn, syncBtn, lista);

/* ============================
   TASK 4 – MEMORIA LOCAL
============================ */

let productos = [];

if (localStorage.getItem("productos")) {
  productos = JSON.parse(localStorage.getItem("productos"));
  console.log("Productos cargados:", productos.length);
  renderizar();
}

/* ============================
   TASK 2 + 3 – AGREGAR
============================ */

agregarBtn.addEventListener("click", () => {

  const nombre = nombreInput.value;
  const precio = Number(precioInput.value);

  // Validación
  if (nombre === "" || isNaN(precio)) {
    console.error("Datos inválidos");
    alert("Completa correctamente los campos");
    return;
  }

  const producto = { id: Date.now(), nombre, precio };

  productos.push(producto);
  guardarLocal();
  renderizar();
  enviarAPI(producto);

  console.log("Producto agregado:", producto);

  nombreInput.value = "";
  precioInput.value = "";
});

/* ============================
   RENDERIZAR
============================ */

function renderizar() {
  lista.innerHTML = "";

  productos.forEach(producto => {

    const li = document.createElement("li");
    li.textContent = `${producto.nombre} - $${producto.precio}`;

    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar";

    btnEliminar.addEventListener("click", () => {
      eliminarProducto(producto.id);
    });

    li.appendChild(btnEliminar);
    lista.appendChild(li);
  });
}

/* ============================
   TASK 3 – ELIMINAR
============================ */

function eliminarProducto(id) {
  productos = productos.filter(p => p.id !== id);
  guardarLocal();
  renderizar();
  console.log("Producto eliminado");
}

/* ============================
   GUARDAR
============================ */

function guardarLocal() {
  localStorage.setItem("productos", JSON.stringify(productos));
}

/* ============================
   TASK 5 – FETCH API CRUD
============================ */

const API_URL = "http://localhost:3000/productos";

syncBtn.addEventListener("click", async () => {
  try {
    const res = await fetch(API_URL);
    const data = await res.json();

    console.log("GET:", data);
  } catch (error) {
    console.error("Error al conectar:", error);
  }
});

/* ============================
   POST
============================ */

async function enviarAPI(producto) {
  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(producto)
    });

    const data = await res.json();
    console.log("POST:", data);

  } catch (error) {
    console.error("Error POST:", error);
  }
}

/* ============================
   PUT
============================ */

async function actualizarAPI(id, producto) {
  try {
    await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(producto)
    });
    console.log("PUT: actualizado");

  } catch (error) {
    console.error("Error PUT:", error);
  }
}

/* ============================
   DELETE
============================ */

async function borrarAPI(id) {
  try {
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    console.log("DELETE: eliminado");

  } catch (error) {
    console.error("Error DELETE:", error);
  }
}
