
/* ============================
   TASK 1
   OBJETO DE PRODUCTOS
============================ */

// Objeto que almacena productos
const products = {
    producto1: {
      id: 1,
      nombre: "Camisa",
      precio: 35000
    },
    producto2: {
      id: 2,
      nombre: "Pantalón",
      precio: 70000
    }
  };
  
  // Validación: cada producto debe tener id, nombre y precio válido
  for (let key in products) {
    const product = products[key];
  
    if (!product.id || !product.nombre || isNaN(product.precio)) {
      console.error("Producto inválido:", product);
    }
  }
  
  /* ============================
      2
     USO DE SET
  ============================ */
  
  // Set con números repetidos
  const numbers = new Set([1, 2, 2, 3, 3, 4]);
  
  // Mostrar el Set (elimina duplicados)
  console.log("Contenido del Set:", numbers);
  
  // Agregar un número
  numbers.add(5);
  
  // Verificar si existe un número
  console.log("¿Existe el número 3?", numbers.has(3));
  
  // Eliminar un número
  numbers.delete(2);
  
  // Recorrer el Set con for...of
  for (let num of numbers) {
    console.log("Valor del Set:", num);
  }
  
  /* ============================
      3
     CREACIÓN DE MAP
  ============================ */
  
  // Map que relaciona categoría → nombre del producto
  const productMap = new Map();
  
  productMap.set("Ropa", "Camisa");
  productMap.set("Ropa2", "Pantalón");
  
  /* ============================
      4
     ITERACIONES
  ============================ */
  
  // Recorrer objeto con for...in
  for (let key in products) {
    console.log("Propiedad:", key, "Valor:", products[key]);
  }
  
  // Métodos del objeto
  console.log("Claves:", Object.keys(products));
  console.log("Valores:", Object.values(products));
  console.log("Entradas:", Object.entries(products));
  
  // Recorrer Map con forEach
  productMap.forEach((value, key) => {
    console.log("Categoría:", key, "Producto:", value);
  });
  
  /* ============================
      5
     PRUEBAS
  ============================ */
  
  console.log("Lista completa de productos:", products);
  console.log("Lista de productos únicos (Set):", numbers);
  console.log("Categorías y productos (Map):", productMap);
  