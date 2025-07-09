// Arreglo inicial de productos
let productos = [
  {
    nombre: "Teclado Gamer RGB",
    precio: 49.99,
    descripcion: "Teclado mecánico con retroiluminación RGB."
  },
  {
    nombre: "Mouse inalámbrico",
    precio: 25.50,
    descripcion: "Mouse ergonómico con conexión Bluetooth."
  },
  {
    nombre: "Monitor 24 pulgadas",
    precio: 159.00,
    descripcion: "Monitor Full HD con tecnología IPS."
  }
];

const lista = document.getElementById("productList");
const btnAgregar = document.getElementById("addProductBtn");

// Función para renderizar la lista de productos
function renderizarProductos() {
  lista.innerHTML = ""; // Limpiar antes de renderizar
  productos.forEach((producto, index) => {
    const item = document.createElement("li");
    item.innerHTML = `
      <strong>${producto.nombre}</strong> - $${producto.precio.toFixed(2)}<br>
      <em>${producto.descripcion}</em>
    `;
    lista.appendChild(item);
  });
}

// Evento para agregar un nuevo producto (plantilla básica)
btnAgregar.addEventListener("click", () => {
  const nuevoProducto = {
    nombre: "Nuevo Producto",
    precio: 0.00,
    descripcion: "Descripción del nuevo producto."
  };
  productos.push(nuevoProducto);
  renderizarProductos();
});

// Render inicial al cargar la página
renderizarProductos();
