// Accedemos a nuestros elementos
const form = document.getElementById('form');
const userNameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const messageError = document.getElementById('message');

// Validamos el campo del username (vacio, formato correcto y pierde el enfoque)
const validateUserNameInput = (username) => {
    // Establecemos el formato
    const regexUserName = /^[a-zA-Z0-9_.]{3,20}$/;
    // Validamos que vacio
    if (username === '') {
        // Marcamos el campo
        setError(userNameInput, 'Nombre de usuario requerido');
        return false;
    } else if (!regexUserName.test(username)) {      // Validamos el formato
        setError(userNameInput, 'Formato incorrecto');
        return false;
    }

    // Quitamos el mensaje
    cleanError(userNameInput);
    return true;
}

// Validamos el campo de password (vacio, formato correcto y pierde el enfoque)
const validatePasswordInput = (password) => {
    const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{7,}$/;
    if (password === '') {
        setError(passwordInput, 'Contraseña requerida');
        return false;
    } else if (!regexPassword.test(password)) {
        setError(passwordInput, 'Formato incorrecto');
        return false;
    }

    cleanError(passwordInput);
    return true;
}

// Creamos una funcion para marcar el error
const setError = (input, message) => {
    // Marcamos el input
    input.classList.add('input--danger');
    // Mostramos mensaje
    showError(message);
}

const showError = (message) => {
    messageError.style.display = 'block';
    messageError.textContent = message;
}

// Creamos una funcion para limpiar error
const cleanError = (input) => {
    input.classList.remove('input--danger');
    messageError.style.display = 'none';
    messageError.textContent = '';
}

// Mostramos nuestro modal
let modalTimeout;
const showSuccessModal = () => {
    // Accedemos a nuestro elemento
    const modal = document.querySelector('.modal');
    // Activamos la clase
    modal.classList.add('modal--active');
    // Limpiamos el tiempo
    clearTimeout(modalTimeout);
    // Cerramos despues de 2.5 segundos
    modalTimeout = setTimeout(() => {
        modal.classList.remove('modal--active');
    }, 2500);
};

// Hacemos el submit del formulario cuando todo sea valido
form.addEventListener('submit', (e) => {
    // Evitamos que el formulario se envie
    e.preventDefault();

    // Extraemos el valor de los inputs
    const username = userNameInput.value.trim();
    const password = passwordInput.value.trim();

    // Validamos cuando ambos campos esten vacios (Mostrar mensaje unico)
    if (username === '' && password === '') {
        // Marcamos los compos en rojo
        userNameInput.classList.add('input--danger');
        passwordInput.classList.add('input--danger');
        // Mostramos el mensaje al usuario
        messageError.style.display = 'block';
        messageError.textContent = 'Por favor llena los campos';
        // Detenemos el envio
        return;
    }

    // Validamos el campo del usuario
    if (!validateUserNameInput(username)) return;

    // Validamos el campo de la contraseña
    if (!validatePasswordInput(password)) return;

    // Confirmamos ingreso
    showSuccessModal();
    console.log('Formulario enviado');

    // Limpiamos el formulario
    form.reset();
    
    // Limpiamos los errores
    cleanError(userNameInput);
    cleanError(passwordInput);
});