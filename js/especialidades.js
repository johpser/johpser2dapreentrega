const body = document.body;
const barra = document.getElementById('header');
const barranav = document.createElement('navbar');
const nav = document.createElement('nav');
const ul = document.createElement('ul');

barra.appendChild(barranav);
barranav.appendChild(nav);
nav.appendChild(ul);
barranav.className = 'navbar';

const links = ["Index", "Especialidades", "Contacto"];

for ( const link of links){

    const li = document.createElement('li');
    li.innerHTML = `<a href="${link.toLowerCase()}.html" >${link}</a>`
    ul.appendChild(li);
}

barra.style.backgroundColor ='#4368c8'

const citasreservadas = [];

document.getElementById("datos").addEventListener("submit", function (event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const telefono = document.getElementById("telefono").value;
    const atencion = document.getElementById("atencion").value;
    const horario = document.getElementById("horario").value;

    const estaRegistrada = citasreservadas.some(cita => {
        return cita.correo === correo;
    });

    if (estaRegistrada) {
        alert("Esta persona ya tiene una cita registrada para el mismo tipo de atención y horario.");
        return;
    }

    const cita = {
        nombre: nombre,
        correo: correo,
        telefono: telefono,
        atencion: atencion,
        horario: horario
    };
    citasreservadas.push(cita);

    document.getElementById("datos").reset();

   
    console.log("Cita registrada:", cita);

   
    const citasRegistradasDiv = document.getElementById("citasRegistradas");
    citasRegistradasDiv.innerHTML += `<p>Nombre: ${cita.nombre}, Correo: ${cita.correo}, Teléfono: ${cita.telefono}, Tipo de Atención: ${cita.atencion}, Horario: ${cita.horario}</p>`;
});

document.getElementById("limpiarBtn").addEventListener("click", function () {
    document.getElementById("datos").reset();
    document.getElementById("mensaje").innerHTML = "";
    document.getElementById("consultaResult").innerHTML = "";
});

document.getElementById("consultarBtn").addEventListener("click", function () {
    const correoConsulta = document.getElementById("correo").value;
    const citasPorCorreo = citasreservadas.filter(cita => cita.correo === correoConsulta);
    if (citasPorCorreo.length === 0) {
        document.getElementById("consultaResult").innerHTML = "No se encontraron citas para este correo electrónico.";
    } else {
        const citasHTML = citasPorCorreo.map(cita => `<p>Nombre: ${cita.nombre}, Tipo de Atención: ${cita.atencion}, Horario: ${cita.horario}</p>`).join("");
        document.getElementById("consultaResult").innerHTML = citasHTML;
    }
});


















































