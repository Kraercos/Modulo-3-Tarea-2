let diadelamarmota={
    Nombre:"Dia de la marmota",
    Año: 1993,
    Director: 'Harold Ramis',
    Genero: 'ciencia ficcion',
    Imagen:"dia de la marmota.jpg",
}

let unidos={
    Nombre:'unidos',
    Año:2020,
    Director: 'Dan scanlon',
    Genero:'animacion',
    Imagen:'unidos.jpg',
}
let vengadores={
    Nombre:'vengadores',
    Año:2020,
    Director: 'Anthony y Joe Russo',
    Genero:'accion',
    Imagen:'vengadores.jpg',
}
let señordelosanillos={
    Nombre:'Señor de los anillos',
    Año:1978,
    Director: 'Ralph Bakshi',
    Genero:'ciencia ficcion',
    Imagen:'señor de los anillos.jpg',
}
let elaro={
    Nombre:'El aro',
    Año:2002,
    Director: 'Gore Verbinski',
    Genero:'Terror',
    Imagen:'el aro.jpg',
}
let harrypotter={
    Nombre:'Harry potter:las reliquias de la muerte parte 1',
    Año:2010,
    Director: 'J K Rowling',
    Genero:'ciencia ficcion',
    Imagen:'harry potter.jpg',
}
function index(){
    window.open('index.html');
}
var peliculas=[diadelamarmota,unidos,elaro,harrypotter,señordelosanillos];

function cargarInfo(id){
    slider=document.getElementById('container-slider');
    cards=document.getElementById('cards');
    lista=document.getElementById('lista');
    
    lista.style.display='block';
    slider.style.display='none';
    cards.style.display='none';

    var num='id';
    const lista=document.getElementById('lista');
    const agregar=document.getElementById('div');

    agregar.innerHTML = `
        <div class="Hola">
            <div class="con">
                <h5>Nombre: </h5>
                <p>${peliculas[id].Nombre}</p>
            </div>
            
            <br>
            <div class="con">
                <h5>Año: </h5>
                <p>${peliculas[id].Año}</p>
            </div>
            </br>
            <br>
            <div class="con">
                <h5>Director: </h5>
                <p>${peliculas[id].Director}</p>
            </div>
            </br>
            <br>
            <div class="con">
                <h5>Genero: </h5>
                <p>${peliculas[id].Genero}</p>
            </div>
            </br>
            <br>
         <button type="button" class="btn btn-primary" onclick="index()">Volver a inicio</button>
            </br>       
         </div>    
        `;
    
     lista.appendChild(agregar);   
}
function agregarUser(){
    var varNombre=document.getElementById('inputNombre').value;
    var varApellido=document.getElementById('inputApellido').value;
    var varTelefono=document.getElementById('inputTelefono').value;
    var varDireccion=document.getElementById('inputDireccion').value;
    var varObservaciones=document.getElementById('inputObservaciones').value;

let user={
    nombre:varNombre,
    apellido:varApellido,
    telefono:varTelefono,
    direccion:varDireccion,
    observaciones:varObservaciones,
}
localStorage.setItem('nombre',JSON.stringify(user));
alert('usuario guardado correctamente');
}