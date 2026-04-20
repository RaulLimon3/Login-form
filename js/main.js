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

    console.log('Formulario enviado');
});


































// Validamos el campo de username
// const validateUserName = () => {
//     const username = userNameInput.value.trim();
//     const userNameRegex = /^[a-zA-Z0-9_.]{3,20}$/;
//     if (username === '') {
//         setError(userNameInput, 'El usuario es obligatorio');
//         return false;
//     } else if (!userNameRegex.test(username)) {
//         setError(userNameInput, 'Usuario invalido');
//         return false;
//     } else {
//         // Quitamos las advertencias
//         clearError(userNameInput);
//         return true;
//     }
// };

// Validamos el campo de password
// const validatePassword = () => {
//     const password = passwordInput.value.trim();
//     const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{7,}$/;
//     // Validamos el campo de password
//     if (password === '') {
//         setError(passwordInput, 'La contraseña es obligatoria');
//         return false;
//     } else if (!passwordRegex.test(password)) {
//         setError(passwordInput, 'Contraseña inválida');
//         return false;
//     } else {
//         clearError(passwordInput);
//         return true;
//     }
// }

// Creamos una funcion para mostrar el error
// const setError = (input, message) => {
//     input.classList.add('input--danger');
//     showError(message);
// };

// const showError = (message) => {
//     messageError.style.display = 'block';
//     messageError.textContent = message;
// };

// const clearError = (input) => {
//     input.classList.remove('input--danger');
// }

// Validamos cuando el usuario se sale del input
// userNameInput.addEventListener('blur', validateUserName);
// passwordInput.addEventListener('blur', validatePassword);

// Esperamos que el usuario llene los campos y le de en login
// form.addEventListener('submit', (e) => {
//     // Evitamos que el usuario envie el formulario
//     e.preventDefault();
//     const username = userNameInput.value.trim();
//     const password = passwordInput.value.trim();

//     // Caso especial
//     if (username === '' && password === '') {
//         showError('Por favor llena todos los campos');
//         userNameInput.classList.add('input--danger');
//         passwordInput.classList.add('input--danger');
//         return;
//     }
//     // Validamos el formulario
//     const isValid = validateUserName() && validatePassword();
//     if (isValid) {

//         // Enviamos el formulario
//         console.log('Formulario válido');
//     }
// });