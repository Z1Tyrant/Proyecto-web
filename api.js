// Obtener el token de acceso del usuario desde la URL o cualquier otro método de autenticación
const token = "c5975466e2d641598de03b98d611d7f1";

// Realizar una solicitud GET a la API de Spotify para obtener el historial de reproducción
fetch("https://api.spotify.com/v1/me/player/recently-played", {
  headers: {
    Authorization: "Bearer " + token,
  },
})
  .then((response) => response.json())
  .then((data) => {
    // Obtener el elemento HTML donde se mostrará el historial de reproducción
    const historyElement = document.getElementById("history");

    // Iterar sobre los datos del historial de reproducción y mostrarlos en la página
    data.items.forEach((item) => {
      // Obtener el nombre de la canción y del artista
      const name = item.track.name;
      const artist = item.track.artists[0].name;

      // Crear un elemento HTML para mostrar la información
      const element = document.createElement("p");
      element.innerHTML = name + " - " + artist;

      // Añadir el elemento al elemento contenedor en la página
      historyElement.appendChild(element);
    });
  })
  .catch((error) => {
    console.error("Error:", error);
  });
