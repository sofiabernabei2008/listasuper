
// Creamos un arreglo vacío para guardar los productos
let productos = [];

// Función para mostrar los productos numerados
function logItems(arreglo) {
    arreglo.forEach(function(producto, indice) {
        console.log(indice + ": " + producto);
    });
}

// Variable para guardar el comando ingresado
let comando = "";

// Mientras el usuario no escriba salir, el programa continúa
while (comando !== "salir") {

    comando = prompt(
        "¿Qué desea hacer?\n\n" +
        "Escriba: nuevo, listar, borrar o salir"
    );

    // Si el usuario cancela el prompt, finalizamos
    if (comando === null) {
        comando = "salir";
    } else {

        comando = comando.toLowerCase().trim();

        // Agregar un producto nuevo
        if (comando === "nuevo") {

            let nuevoProducto = prompt("Ingrese el nombre del producto:");

            if (nuevoProducto !== null && nuevoProducto.trim() !== "") {
                productos.push(nuevoProducto.trim());
                console.log("Producto agregado: " + nuevoProducto);
            } else {
                console.log("No se agregó ningún producto.");
            }

        }

        // Mostrar todos los productos
        else if (comando === "listar") {

            console.log("Lista de productos:");
            logItems(productos);

        }

        // Eliminar un producto
        else if (comando === "borrar") {

            if (productos.length === 0) {
                console.log("La lista está vacía.");

            } else {

                logItems(productos);

                let indice = Number(
                    prompt("Ingrese el número del producto que desea borrar:")
                );

                if (
                    Number.isInteger(indice) &&
                    indice >= 0 &&
                    indice < productos.length
                ) {
                    let eliminado = productos.splice(indice, 1);

                    console.log("Producto eliminado: " + eliminado[0]);

                } else {
                    console.log("Índice inválido.");
                }
            }

        }

        // Comando incorrecto
        else if (comando !== "salir") {

            console.log("Comando no válido. Intente nuevamente.");

        }
    }
}

console.log("¡Gracias por utilizar la Súper App!");
