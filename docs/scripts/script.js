const button = document.querySelector('button');

const consultas = [];

button.addEventListener('click', enviarConsulta);

function enviarConsulta() {
  var select = document.getElementById('departamento');
  var depto = select.options[select.selectedIndex].text;

  var form = {
    nombre: document.getElementById('nombre').value,
    apellido: document.getElementById('apellido').value,
    email: document.getElementById('email').value,
    edad: document.getElementById('edad').value,
    departamento: depto,
    consulta: document.getElementById('consulta').value,
  }
  
  if (form.nombre === '') {
    alert('Por favor, ingresa un nombre.');
    return;
  }
  /*
  if (form.apellido === '') {
    alert('Por favor, ingresa un apellido.');
    return;
  }
  if (form.email === '') {
    alert('Por favor, ingresa un email.');
    return;
  }
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!re.test(form.email.toLowerCase())) {
    alert('Por favor, ingresa un email válido.');
    return;
  }
  if (form.edad <= 0 ) {
    alert('Por favor, ingresa tu edad.');
    return;
  }
  if (form.consulta.length < 20) {
    alert('Por favor, escribe un poco más acerca de tu consulta.');
    return;
  }*/

  consultas.push(form);
  console.log('consultas',consultas);

}
