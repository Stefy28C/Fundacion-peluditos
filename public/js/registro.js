const form = document.getElementById("form");
form.addEventListener("submit", validarFormulario);

function validarFormulario(evento) {
  evento.preventDefault(); // evitar que el formulario se envíe antes de validar

  const nombre = document.getElementById("name").value.trim();
  const celular = document.getElementById("celular").value.trim();
  const direccion = document.getElementById("direccion").value.trim();
  const email = document.getElementById("email").value.trim();
  const contrasena = document.getElementById("password").value.trim();

  //Span de errores de validacion
  const errorNombre = document.getElementById("error-name");
  const errorCelular = document.getElementById("error-phone");
  const errorDireccion = document.getElementById("error-direccion");
  const errorEmail = document.getElementById("error-email");
  const errorContraseña = document.getElementById("error-password");


  //ventana registro exitoso
  //const formulario = document.querySelector('form');

  // Validar nombre
  if (nombre === "") {
    errorNombre.textContent = "Por favor ingresa tu nombre";
    return;
  } else {
    errorNombre.textContent = "";
  }

  // Validar celular
  if (celular === "") {
    errorCelular.textContent = "Por favor ingresa tu número de celular";
    return;
  } else if (isNaN(celular) || celular.length !== 10) {
    errorCelular.textContent =
      "El número de celular debe ser numérico y tener 10 dígitos";
    return;
  } else {
    errorCelular.textContent = "";
  }

  // Validar dirección
  if (direccion === "") {
    errorDireccion.textContent = "Por favor ingresa tu dirección";
    return;
  } else {
    errorDireccion.textContent = "";
  }

  // Validar email
  if (email === "") {
    errorEmail.textContent = "Por favor ingresa tu correo electrónico";
    return;
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    errorEmail.textContent = "El correo electrónico no es válido";
    return;
  } else {
    errorEmail.textContent = "";
  }

  // Validar contraseña

  /** Al menos una letra minúscula ((?=.*[a-z]))
Al menos una letra mayúscula ((?=.*[A-Z]))
Al menos un número ((?=.*\d))
Al menos un símbolo especial ((?=.*[@$!%*?&]))
Longitud mínima de 6 caracteres ({6,})*/
  if (contrasena === "") {
    errorContraseña.textContent = "Por favor ingresa tu contraseña";
    return;
  } else if (contrasena.length < 6) {
    errorContraseña.textContent =
      "La contraseña debe tener al menos 6 caracteres";
    return;
  } else if (
    !contrasena.match(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/
    )
  ) {
    errorContraseña.textContent =
      "La contraseña debe contener al menos una mayúscula, una minúscula, un símbolo especial y un número";
    return;
  } else {
    errorContraseña.textContent = "";
  }
// ir a la pagina de exito
/*formulario.addEventListener('submit', (event) => {
    event.preventDefault();
    window.location.href = '/exitoso.html';
  });*/
  // Si todo está bien, envía el formulario
  form.submit();
}
