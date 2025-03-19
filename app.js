let amigos = []; // Array para almacenar los nombres de amigos

// Función para agregar amigos
function agregarAmigo() {
    let input = document.getElementById("amigo"); // Capturar el campo de entrada
    let nombre = input.value.trim(); // Obtener el valor y eliminar espacios en blanco

    // Validar la entrada
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    if (amigos.includes(nombre)) {
        alert("Este nombre ya está en la lista.");
        return;
    }

    // Agregar el nombre al array de amigos
    amigos.push(nombre);

    // Actualizar la lista de amigos en la pantalla
    mostrarListaAmigos();

    // Limpiar el campo de entrada
    input.value = "";
}

// Función para mostrar la lista de amigos
function mostrarListaAmigos() {
    let lista = document.getElementById("listaAmigos"); // Obtener el elemento de la lista
    lista.innerHTML = ""; // Limpiar la lista existente

    // Recorrer el array amigos y agregar cada nombre como un elemento <li>
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];

        let btnEliminar = document.createElement("button");
        btnEliminar.textContent = "❌";
        btnEliminar.className = "delete-btn";
        btnEliminar.onclick = () => eliminarAmigo(i);

        li.appendChild(btnEliminar);
        lista.appendChild(li);
    }
}

// Función para eliminar amigos de la lista
function eliminarAmigo(index) {
    amigos.splice(index, 1); // Eliminar el amigo del array
    mostrarListaAmigos(); // Actualizar la lista en pantalla
}

// Función para sortear un amigo de manera aleatoria
function sortearAmigo() {
    // Validar que haya al menos un amigo en la lista
    if (amigos.length === 0) {
        alert("La lista está vacía. Agregue al menos un amigo antes de sortear.");
        return;
    }

    // Generar un índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre sorteado
    let amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado en pantalla
    document.getElementById("resultado").innerHTML = `🎉 Amigo Secreto: <strong>${amigoSorteado}</strong> 🎁`;
}

// Función para limpiar toda la lista y el resultado
function limpiarTodo() {
    amigos = []; // Vaciar el array de amigos
    mostrarListaAmigos(); // Actualizar la lista en pantalla
    document.getElementById("resultado").innerHTML = ""; // Limpiar el resultado del sorteo
}
