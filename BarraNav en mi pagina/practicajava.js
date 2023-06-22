/* funcion para boton (muestra una alerta)*/
function showAlert() { 
  alert("hola, ALERTA"); }
/* para crear oyente de interaccion (muestra una alerta)*/
const botton = document.getElementById('Boton2');
botton.addEventListener("click", function() {
  alert('BINGO'); })

/* formulario de correo*/
const form = document.getElementById('myForm');
function validateEmail() {
    const regex =  /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/
    return regex.test(email)
  }
  function validateForm() {
    const input = document.getElementById('email');
    const inputValue = input.value
    if (validateEmail(inputValue)) {
      alert('Enviado')
    } else {
      alert('Error')
    }
  }

  form.addEventListener("submit", function(verificar) { 
    verificar.preventDefault()
    validateForm();

  })

  document.querySelector("button.button-menu-toggle")
    .addEventListener("click", function() {
      
           document.querySelector(".nav-links").
                      classList.toggle("nav-links-responsive")})

