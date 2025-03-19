// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

document.getElementById('addButton').addEventListener('click', addFriend);
document.getElementById('button-draw').addEventListener('click', drawSecretFriend);

let friends = [];

function addFriend() {
    const amigo = document.getElementById('amigo').value.trim();

    if (amigo === "") {
        alert("Por favor ingresa un nombre válido.");
        return;
    }

    // Agregar el nombre a la lista
    friends.push(amigo);

    // Mostrar la lista en la página
    displayFriendsList();

    // Limpiar el campo de texto
    document.getElementById('amigo').value = "";
}

function displayFriendsList() {
    const listElement = document.getElementById('listaAmigos');
    listElement.innerHTML = ''; // Limpiar la lista antes de volver a mostrarla

    friends.forEach(friend => {
        const li = document.createElement('li');
        li.textContent = friend;
        listElement.appendChild(li);
    });
}

function drawSecretFriend() {
    if (friends.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    // Seleccionar un amigo de forma aleatoria
    const randomIndex = Math.floor(Math.random() * friends.length);
    const secretFriend = friends[randomIndex];

    // Mostrar el resultado
    document.getElementById('secretFriend').textContent = secretFriend;
}
