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

const banner = document.createElement("div")
const texbanner = document.createElement("h1")
banner.innerHTML = "<h1>TU BIENESTAR ES NUESTRA PRIORIDAD</h1>";
banner.appendChild(texbanner);
body.appendChild(banner);


banner.style.marginLeft = '25%'; 


const banner2 = document.createElement("div")
let texbanner2 = document.createElement("h2")
let texbanner3 = document.createElement("h2")
texbanner2.innerHTML = "<h2>Profesional</h2>";
texbanner3.innerHTML = "<h2>Psicólogo clínico de la Salud e Investigador</h2>";
banner2.appendChild(texbanner2);
banner2.appendChild(texbanner3);
body.appendChild(banner2);



const atencion = document.createElement("div");
let texatencion = document.createElement("p");
texatencion.innerHTML = "<h2>Atención presencial y online</h2>";
atencion.appendChild(texatencion); 

const btoatencion = document.createElement('button');
let texbtoatencion = document.createElement('a');
texbtoatencion.href='https://johpser.github.io/johpser2dapreentrega/especialidades.html'
texbtoatencion.textContent = 'RESERVAR CITA'
texbtoatencion.style.color = 'inherit'; 
texbtoatencion.style.textDecoration = 'none';
btoatencion.appendChild(texbtoatencion);
atencion.appendChild(btoatencion);
body.appendChild(atencion);

atencion.style.marginLeft = '35%'; 
atencion.style.marginTop = '7%';
btoatencion.style.marginLeft = '10%';

const horario = document.createElement("div");
let texhorario = document.createElement("p");
texhorario.innerHTML = "<h3>HORARIO DE ATENCION</h3>\n <h3>LUNES - VIERNES</h3>\n <h2>9:00am a 1:00pm</h2>";
horario.appendChild(texhorario);
body.appendChild(horario);


horario.style.marginTop = '7%';
horario.style.marginLeft = '35%';


const cajainfo = document.createElement("section")
cajainfo.className.add('cajoninfo');

const info = document.createElement("div")
let texinfo = document.createElement("p");
texinfo.innerHTML = "<h3>Bienvenido a mejorar tu salud mental</h3>";
info.appendChild(texinfo);
body.appendChild(info);














































