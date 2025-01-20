# AluraGeek🎮

Este es un proyecto de una página web para la venta de **juegos y consolas retro**. La página muestra un catálogo de productos con tarjetas (cards), donde puedes ver el nombre, precio y una opción para eliminar los productos. Además, cuenta con un formulario para agregar nuevos productos al catálogo.

## Tecnologías utilizadas

- **HTML**: Estructura de la página.
- **CSS**: Estilos y diseño responsivo.
- **JavaScript**: Interactividad, incluyendo la simulación de una API con un archivo `db.json`.
- **JSON**: Para simular una base de datos de productos.
- **json-server**: Para simular una API RESTful con el archivo `db.json`.

## Características

- Catálogo de productos con un diseño limpio y moderno.
- Formulario para agregar nuevos productos con nombre, precio e imagen.
- Capacidad para eliminar productos del catálogo.
- Interfaz **responsive** para dispositivos de escritorio, tabletas y móviles.

## Instalación

Para ejecutar este proyecto localmente en tu computadora, sigue los siguientes pasos:

### 1. Clonar el repositorio

``
git clone https://github.com/estebanrm1/alurageek.git
``

### 2. Abrir la carpeta del proyecto

``
cd alurageek
``

### 3. Instalar las dependencias

Para simular la API con json-server, necesitas tener Node.js y npm instalados en tu máquina. Si no los tienes, puedes descargarlos desde Node.js.

Una vez que tengas Node.js y npm instalados, instala las dependencias del proyecto ejecutando:

``
npm install -g json-server
``

### 4. Correr la API con json-server

Para iniciar el servidor de la API que simula las operaciones CRUD (Crear, Leer, Actualizar y Eliminar) sobre el archivo `db.json`, corre el siguiente comando:

``
json-server --watch db.json --port 3000
``

Este comando iniciará json-server y te proporcionará una API RESTful en <http://localhost:3000>. Ahora, el proyecto podrá interactuar con esta API.

## USO

- En la página principal, podrás ver una lista de productos retro (juegos y consolas).
- El formulario te permitirá agregar nuevos productos, con nombre, precio e imagen.
- Los productos se muestran en tarjetas con el nombre, precio y un botón para eliminar el producto.

### Gracias por su visita😎
