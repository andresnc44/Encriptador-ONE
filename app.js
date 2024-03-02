// Función para validar el texto
function validarTexto(texto) {
    // Expresión regular para verificar si el texto contiene caracteres no permitidos
    const regex = /[^a-z\s!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]/;
    if (regex.test(texto) || /[A-Z]/.test(texto)) {
        // Mostrar alerta de error si se encuentran letras mayúsculas
        alert('Error: El texto solo puede contener letras minúsculas, espacios en blanco y algunos caracteres especiales.');
        return false;
    }
    return true;
}


// Función para encriptar un texto
function encriptar(texto) {
    if (!validarTexto(texto)) return; // Validar el texto antes de encriptar

    // Ocultar los elementos que no se deben mostrar
    document.querySelector('.imagen').style.display = 'none';
    document.querySelector('.mensaje-no-encriptado').style.display = 'none';
    document.querySelector('.aviso-no-texto').style.display = 'none';

    // Aplicar las reglas de encriptación
    texto = texto.replace(/e/g, 'enter');
    texto = texto.replace(/i/g, 'imes');
    texto = texto.replace(/a/g, 'ai');
    texto = texto.replace(/o/g, 'ober');
    texto = texto.replace(/u/g, 'ufat');

    return texto;
}

// Función para desencriptar un texto
function desencriptar(texto) {
    if (!validarTexto(texto)) return; // Validar el texto antes de desencriptar

    // Ocultar los elementos que no se deben mostrar
    document.querySelector('.imagen').style.display = 'none';
    document.querySelector('.mensaje-no-encriptado').style.display = 'none';
    document.querySelector('.aviso-no-texto').style.display = 'none';

    // Aplicar las reglas de desencriptación
    texto = texto.replace(/enter/g, 'e');
    texto = texto.replace(/imes/g, 'i');
    texto = texto.replace(/ai/g, 'a');
    texto = texto.replace(/ober/g, 'o');
    texto = texto.replace(/ufat/g, 'u');

    return texto;
}

// Obtener elementos del DOM
const textoInput = document.querySelector('.texto-sin-encriptar');
const resultado = document.querySelector('.texto-encriptado');
const encriptarBtn = document.querySelector('.boton-encriptar');
const desencriptarBtn = document.querySelector('.boton-desencriptar');

// Event listener para el botón de encriptar
encriptarBtn.addEventListener('click', () => {
    const texto = textoInput.value.toLowerCase(); // Convertir a minúsculas
    const textoEncriptado = encriptar(texto);
    if (textoEncriptado) {
        // resultado.value = textoEncriptado;
        const resultadoDiv = document.getElementById('resultado');
        resultadoDiv.textContent = textoEncriptado;
        // Mostrar los elementos nuevamente
        document.querySelector('.imagen').style.display = 'none';
        document.querySelector('.mensaje-no-encriptado').style.display = 'none';
        document.querySelector('.aviso-no-texto').style.display = 'none';
    }
});

// Event listener para el botón de desencriptar
desencriptarBtn.addEventListener('click', () => {
    const textoEncriptado = textoInput.value.toLowerCase(); // Convertir a minúsculas
    const textoDesencriptado = desencriptar(textoEncriptado);
    if (textoDesencriptado) {
        // resultado.value = textoDesencriptado;
        const resultadoDiv = document.getElementById('resultado');
        resultadoDiv.textContent = textoDesencriptado;
        // Mostrar los elementos nuevamente
        document.querySelector('.imagen').style.display = 'none';
        document.querySelector('.mensaje-no-encriptado').style.display = 'none';
        document.querySelector('.aviso-no-texto').style.display = 'none';
    }
});








