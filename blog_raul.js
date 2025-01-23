let likeCount = 0;

// Función para dar "like"
function darLike() {
    likeCount++;
    document.getElementById('likeCounter').innerText = likeCount + ' Likes';
}

// Función para cambiar el título del blog
function cambiarTitulo() {
    const newTitle = prompt('Introduce el nuevo título:');
    if (newTitle) {
        document.getElementById('blogTitle').innerText = newTitle;
    }
}

// Función para cambiar el color del texto
function cambiarColorTexto(color) {
    document.getElementById('textoInformativo').style.color = color;
    document.getElementById('blogTitle').style.color = color;
}

// Contador de palabras
function contarPalabras() {
    const textarea = document.getElementById('comentarios').value;
    const palabras = textarea.trim().split(/\s+/).filter(function (palabra) {
        return palabra.length > 0;
    });
    document.getElementById('contadorPalabras').innerText = 'Palabras: ' + palabras.length;
}

// Temporizador de cuenta regresiva de 10 segundos
let tiempo = 10; // segundos
const temporizadorDiv = document.getElementById('temporizador');
const intervalo = setInterval(() => {
    tiempo--;
    temporizadorDiv.innerText = tiempo;
    if (tiempo <= 0) {
        clearInterval(intervalo);
        alert('¡El tiempo ha terminado!');
    }
}, 1000);

// Función para reproducir sonido
function reproducirSonido() {
    const audio = document.getElementById('audio');
    audio.play();
}

// Mostrar la fecha actual en el pie de página
const fechaActual = new Date();
document.getElementById('fechaActual').innerText = `Fecha Actual: ${fechaActual.toLocaleDateString()}`;

// Mostrar mensaje de carga durante 3 segundos al cargar la página
document.getElementById('loading').style.display = 'block';
setTimeout(() => {
    document.getElementById('loading').style.display = 'none';
}, 3000);

// Mostrar un mensaje animado
function mostrarMensajeAnimado(mensaje) {
    const mensajeDiv = document.createElement('div');
    mensajeDiv.id = 'mensajeAnimado';
    mensajeDiv.textContent = mensaje;
    mensajeDiv.style.position = 'absolute';
    mensajeDiv.style.top = '10px';
    mensajeDiv.style.left = '100%'; // Inicia fuera de la pantalla a la derecha
    mensajeDiv.style.whiteSpace = 'nowrap';
    document.body.appendChild(mensajeDiv);

    // Animar el mensaje
    let width = window.innerWidth; // Ancho de la ventana
    let currentLeft = width; // Empieza fuera de la pantalla
    const desplazamiento = setInterval(() => {
        if (currentLeft < -mensajeDiv.offsetWidth) {
            clearInterval(desplazamiento);
            document.body.removeChild(mensajeDiv); // Elimina el mensaje después de que sale de la pantalla
        } else {
            currentLeft -= 2; // Cambia la velocidad del desplazamiento
            mensajeDiv.style.left = currentLeft + 'px';
        }
    }, 20);
}