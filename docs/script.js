var nombre = document.getElementById('nombre');
nombre.addEventListener('blur', function () {
    var elem = document.getElementById("msg_nombre");
    if (nombre.value === '') {
        elem.classList.remove("hidden-msg");
        nombre.classList.add("border-red-500");
        nombre.classList.remove("border-gray-200");
        nombre.classList.remove("focus:border-gray-500");
    }
    else {
        elem.classList.add("hidden-msg");
        nombre.classList.remove("border-red-500");
        nombre.classList.add("border-gray-200");
        nombre.classList.add("focus:border-gray-500");
    }
});
var email = document.getElementById('email');
email.addEventListener('blur', function () {
    var elem = document.getElementById("msg_email");
    if (email.value === '') {
        elem.classList.remove("hidden-msg");
        elem.innerText = 'Please, enter your email.';
        email.classList.add("border-red-500");
        email.classList.remove("border-gray-200");
        email.classList.remove("focus:border-gray-500");
    }
    else {
        var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(email.value.toLowerCase())) {
            elem.classList.remove("hidden-msg");
            elem.innerText = 'Please, enter a valid email.';
            email.classList.add("border-red-500");
            email.classList.remove("border-gray-200");
            email.classList.remove("focus:border-gray-500");
        }
        else {
            elem.classList.add("hidden-msg");
            email.classList.remove("border-red-500");
            email.classList.add("border-gray-200");
            email.classList.add("focus:border-gray-500");
        }
    }
});
var edad = document.getElementById('edad');
edad.addEventListener('blur', function () {
    var elem = document.getElementById("msg_edad");
    if (edad.value <= 0) {
        elem.classList.remove("hidden-msg");
        edad.classList.add("border-red-500");
        edad.classList.remove("border-gray-200");
        edad.classList.remove("focus:border-gray-500");
    }
    else {
        elem.classList.add("hidden-msg");
        edad.classList.remove("border-red-500");
        edad.classList.add("border-gray-200");
        edad.classList.add("focus:border-gray-500");
    }
});
var consulta = document.getElementById('consulta');
consulta.addEventListener('blur', function () {
    var elem = document.getElementById("msg_consulta");
    if (consulta.value === '') {
        elem.classList.remove("hidden-msg");
        consulta.classList.add("border-red-500");
        consulta.classList.remove("border-gray-200");
        consulta.classList.remove("focus:border-gray-500");
    }
    else {
        elem.classList.add("hidden-msg");
        consulta.classList.remove("border-red-500");
        consulta.classList.add("border-gray-200");
        consulta.classList.add("focus:border-gray-500");
    }
});
var buttonEnviar = document.getElementById('enviar');
var consultas = [];
buttonEnviar.addEventListener('click', enviarConsulta);
function enviarConsulta() {
    var select = document.getElementById('departamento');
    var depto = select.options[select.selectedIndex].text;
    var form = {
        nombreContacto: nombre.value,
        email: email.value,
        edad: edad.value,
        departamento: depto,
        consulta: consulta.value
    };
    if (form.nombreContacto === '') {
        var elem = document.getElementById("msg_nombre");
        elem.classList.remove("hidden-msg");
        nombre.classList.add("border-red-500");
        nombre.classList.remove("border-gray-200");
        nombre.classList.remove("focus:border-gray-500");
        return;
    }
    if (form.email === '') {
        var elem = document.getElementById("msg_email");
        elem.classList.remove("hidden-msg");
        elem.innerText = 'Please, enter your email.';
        email.classList.add("border-red-500");
        email.classList.remove("border-gray-200");
        email.classList.remove("focus:border-gray-500");
        return;
    }
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(form.email.toLowerCase())) {
        var elem = document.getElementById("msg_email");
        elem.classList.remove("hidden-msg");
        elem.innerText = 'Please, enter a valid email.';
        email.classList.add("border-red-500");
        email.classList.remove("border-gray-200");
        email.classList.remove("focus:border-gray-500");
        return;
    }
    if (form.edad <= 0) {
        var elem = document.getElementById("msg_edad");
        elem.classList.remove("hidden-msg");
        edad.classList.add("border-red-500");
        edad.classList.remove("border-gray-200");
        edad.classList.remove("focus:border-gray-500");
        return;
    }
    if (form.consulta.length < 20) {
        var elem = document.getElementById("msg_consulta");
        elem.classList.remove("hidden-msg");
        consulta.classList.add("border-red-500");
        consulta.classList.remove("border-gray-200");
        consulta.classList.remove("focus:border-gray-500");
        return;
    }
    
    var xhr = new XMLHttpRequest();
    xhr.open("POST", 'https://PW2021-APINode-gdotta30-6.germandotta.repl.co/enviar-formulario', true);
    xhr.withCredentials = true;
    xhr.crossDomain = true;
    xhr.setRequestHeader("Content-Type", "application/json");
    
    xhr.onreadystatechange = function() { // Call a function when the state changes.
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            
            setCookie("PW_2021-CV_Contacto", form.nombreContacto, 365);
            
            /* No me funco.
            console.log(xhr.getAllResponseHeaders());
            if (xhr.getAllResponseHeaders().indexOf("Set-Cookie") >= 0) {
                console.log("header:", xhr.getResponseHeader("Set-Cookie"));
              }

            var cookie = xhr.getResponseHeader("PW_2021-CV_Contacto");
            console.log(cookie);
            */
            
            document.getElementById('form_msg').style.display = 'block';
            document.getElementById('form_msg').innerHTML = this.responseText;

            limpiar();
        }
    }
    xhr.send(JSON.stringify(form));
}
function limpiar() {
    nombre.value = '';
    email.value = '';
    edad.value = '';
    var select = document.getElementById('departamento');
    select.selectedIndex = 9;
    consulta.value = '';
    rememberUser();
}

function getExperiencia() {
    fetch('https://PW2021-APINode-gdotta30-6.germandotta.repl.co/experiencia-laboral', {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
        }
    }).then(res => res.json())
    .then(res => {
        var html = '<ul style="list-style-type:circle">';
        for(var i = 0; i < res['experiencia-laboral'].length; i++) {
            var obj = res['experiencia-laboral'][i];
            html += '<li>'+
                        '<div class="pb-2 fw-bolder">'+obj.empresa+'</div>'+
                        '<div>'+obj.puesto+'</div>'+
                        '<div>'+'From: '+obj.fechaInicio+' To: '+obj.fechaFin+'</div>'+
                    '</li>';
        }
        html += '</ul>';
        document.getElementById("experience-content").innerHTML = html;
        }
    )
    .catch( err => console.error(err));
}

window.onload = function() {
    getExperiencia();
    rememberUser();
}

function rememberUser(){
    let user = getCookie("PW_2021-CV_Contacto");
    if (user != '') {
        document.getElementById('nombre').value = user;
    }
}

function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }