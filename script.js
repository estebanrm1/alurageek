const API_URL = "http://localhost:3000/productos";

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("producto-form");
    const productosContainer = document.getElementById("productos");

    const cargarProductos = async () => {
        try {
            const response = await fetch(API_URL);
            const productos = await response.json();

            productosContainer.innerHTML = "";
            productos.forEach((producto) => {
                agregarProductoAlDOM(producto);
            });
        } catch (error) {
            console.error("Error al cargar los productos:", error);
        }
    };

    const agregarProductoAlDOM = (producto) => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.dataset.id = producto.id;

        card.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <div class="info">
        <h3>${producto.nombre}</h3>
        <div class="precio-eliminar">
        <div class="precio">$${producto.precio}</div>
        <button class="eliminar-btn">Eliminar</button>
        </div>
        </div>
        `;

        card.querySelector(".eliminar-btn").addEventListener("click", async () => {
            const id = card.dataset.id;
            try {
                await fetch(`${API_URL}/${id}`, { method: "DELETE" });
                card.remove();
            } catch (error) {
                console.error("Error al eliminar el producto:", error);
            }
        });

        productosContainer.appendChild(card);
    };

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const nuevoProducto = {
            nombre: document.getElementById("nombre").value,
            precio: document.getElementById("precio").value,
            imagen: document.getElementById("imagen").value,
        };

        try {
            const response = await fetch(API_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(nuevoProducto),
            });

            const productoCreado = await response.json();
            agregarProductoAlDOM(productoCreado);

            form.reset();
        } catch (error) {
            console.error("Error al agregar el producto:", error);
        }
    });

    cargarProductos();
});
