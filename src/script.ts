const nombre = document.getElementById('nombre');

nombre.addEventListener('blur',()=>{
  let elem = document.getElementById("msg_nombre");
  if (nombre.value === '') {
    elem.classList.remove("hidden-msg");
    nombre.classList.add("border-red-500")
    nombre.classList.remove("border-gray-200");
    nombre.classList.remove("focus:border-gray-500");
  } else {
    elem.classList.add("hidden-msg");
    nombre.classList.remove("border-red-500")
    nombre.classList.add("border-gray-200");
    nombre.classList.add("focus:border-gray-500");
  }
})

const apellido = document.getElementById('apellido');

apellido.addEventListener('blur',()=>{
  let elem = document.getElementById("msg_apellido");
  if (apellido.value === '') {
    elem.classList.remove("hidden-msg");
    apellido.classList.add("border-red-500")
    apellido.classList.remove("border-gray-200");
    apellido.classList.remove("focus:border-gray-500");
  } else {
    elem.classList.add("hidden-msg");
    apellido.classList.remove("border-red-500")
    apellido.classList.add("border-gray-200");
    apellido.classList.add("focus:border-gray-500");
  }
})

const email = document.getElementById('email');

email.addEventListener('blur',()=>{
  let elem = document.getElementById("msg_email");
  if (email.value === '') {
    elem.classList.remove("hidden-msg");
    elem.innerText = 'Por favor, ingresa un email.'
    email.classList.add("border-red-500")
    email.classList.remove("border-gray-200");
    email.classList.remove("focus:border-gray-500");
  } else {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(email.value.toLowerCase())) {
      elem.classList.remove("hidden-msg");
      elem.innerText = 'Por favor, ingresa un email válido.'
      email.classList.add("border-red-500")
      email.classList.remove("border-gray-200");
      email.classList.remove("focus:border-gray-500");
    } else {
      elem.classList.add("hidden-msg");
      email.classList.remove("border-red-500")
      email.classList.add("border-gray-200");
      email.classList.add("focus:border-gray-500");
    }
  }
})

const edad = document.getElementById('edad');

edad.addEventListener('blur',()=>{
  let elem = document.getElementById("msg_edad");
  if (edad.value <= 0) {
    elem.classList.remove("hidden-msg");
    edad.classList.add("border-red-500")
    edad.classList.remove("border-gray-200");
    edad.classList.remove("focus:border-gray-500");
  } else {
    elem.classList.add("hidden-msg");
    edad.classList.remove("border-red-500")
    edad.classList.add("border-gray-200");
    edad.classList.add("focus:border-gray-500");
  }
})

const consulta = document.getElementById('consulta');

consulta.addEventListener('blur',()=>{
  let elem = document.getElementById("msg_consulta");
  if (consulta.value === '') {
    elem.classList.remove("hidden-msg");
    consulta.classList.add("border-red-500")
    consulta.classList.remove("border-gray-200");
    consulta.classList.remove("focus:border-gray-500");
  } else {
    elem.classList.add("hidden-msg");
    consulta.classList.remove("border-red-500")
    consulta.classList.add("border-gray-200");
    consulta.classList.add("focus:border-gray-500");
  }
})

const buttonEnviar = document.getElementById('enviar');

var consultas = [];

buttonEnviar.addEventListener('click', enviarConsulta);

function enviarConsulta() {
  var select = document.getElementById('departamento');
  var depto = select.options[select.selectedIndex].text;

  var form = {
    nombre: nombre.value,
    apellido: apellido.value,
    email: email.value,
    edad: edad.value,
    departamento: depto,
    consulta: consulta.value,
  }
  
  if (form.nombre === '') {
    let elem = document.getElementById("msg_nombre");
    elem.classList.remove("hidden-msg");
    nombre.classList.add("border-red-500")
    nombre.classList.remove("border-gray-200");
    nombre.classList.remove("focus:border-gray-500");
    return;
  }
  if (form.apellido === '') {
    let elem = document.getElementById("msg_apellido");
    elem.classList.remove("hidden-msg");
    apellido.classList.add("border-red-500")
    apellido.classList.remove("border-gray-200");
    apellido.classList.remove("focus:border-gray-500");
    return;
  }
  if (form.email === '') {
    let elem = document.getElementById("msg_email");
    elem.classList.remove("hidden-msg");
    elem.innerText = 'Por favor, ingresa un email.'
    email.classList.add("border-red-500")
    email.classList.remove("border-gray-200");
    email.classList.remove("focus:border-gray-500");
    return;
  }
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!re.test(form.email.toLowerCase())) {
    let elem = document.getElementById("msg_email");
    elem.classList.remove("hidden-msg");
    elem.innerText = 'Por favor, ingresa un email válido.'
    email.classList.add("border-red-500")
    email.classList.remove("border-gray-200");
    email.classList.remove("focus:border-gray-500");
    return;
  }
  if (form.edad <= 0 ) {
    let elem = document.getElementById("msg_edad");
    elem.classList.remove("hidden-msg");
    edad.classList.add("border-red-500")
    edad.classList.remove("border-gray-200");
    edad.classList.remove("focus:border-gray-500");
    return;
  }
  if (form.consulta.length < 20) {
    let elem = document.getElementById("msg_consulta");
    elem.classList.remove("hidden-msg");
    consulta.classList.add("border-red-500")
    consulta.classList.remove("border-gray-200");
    consulta.classList.remove("focus:border-gray-500");
    return;
  }

  consultas.push(form);
  limpiar()
  console.log('consultas',consultas);

}

function limpiar() {
  nombre.value = '';
  apellido.value = '';
  email.value = '';
  edad.value = '';
  var select = document.getElementById('departamento');
  select.selectedIndex = 9;
  consulta.value = '';
}

const buttonBuscar = document.getElementById('buscar');

buttonBuscar.addEventListener('click', buscarUsuario);

function buscarUsuario() {
  let res = document.getElementById('result');
  res.innerText = '';
  const searchEmail = document.getElementById('email_buscar');
  if (searchEmail.value === '') {
    res.innerText = 'Ingresa un email para buscar';
    return;
  }
  const result = consultas.filter(usuario => usuario.email.toLowerCase() === searchEmail.value.toLowerCase());
  if (result.length === 0) {
    res.innerText = 'Usuario no encontrado'
  } else {
    res.innerText = 'Encontrado!! : '+result[0].nombre+' '+result[0].apellido;
  }
}