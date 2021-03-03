var elemOrigen;
var elemDestino;


function Comenzar(){

    elemOrigen = document.getElementById("imagen");
    elemDestino = document.getElementById("destino");
    
    elemOrigen.addEventListener("dragstart", ComenzamosArrastrar, false);
    elemDestino.addEventListener("dragover", function(e){e.preventDefault();}, false);
    //el metodo preventDefault anula el comportamiento que tiene la pagina web x defecto que no permite arrastrar objetos
    elemDestino.addEventListener("drop", Soltado, false);
    elemOrigen.addEventListener("dragend", Terminado, false);
    elemDestino.addEventListener("dragenter", Entrando, false);
    elemDestino.addEventListener("dragleave", Saliendo, false);

    //elemOrigen.addEventListener("dragstart", function(){alert("Comenzo el evento");}, false); // con funcion anonima
    /*
    OBJETO DE ORIGEN
    dragstart: desencadena la accion al comenzar el arrastre
    drag: desencadena la accion durante la operacion de arrastre
    dragend: desencadena la accion al terminar de arrastrar

    OBJETO DE DESTINO
    dragenter: cuando el raton entra al area de destino
    dragover: cuando el elemento es soltado en el area de destino
    dragleave: cuando el elemento arrastrado sale del area de destino

    OBJETO DATATRANSFER
    
    metodo setData: declara que datos seran transferidos
    metodo getData: declara que datos sran capturados
    */
}

function ComenzamosArrastrar(e){

    var codigo = "<img src='" + elemOrigen.getAttribute("src") + "'>";

    e.dataTransfer.setData("Text", codigo);
}

function Soltado(e){

    e.preventDefault();

    elemDestino.innerHTML = e.dataTransfer.getData("Text");
}

function Terminado(e){

    var elemento = e.target;

    elemento.style.visibility = "hidden";
}

function Entrando(e){

    e.preventDefault();
    elemDestino.style.background = "rgba(8,252,25,.8)";
}

function Saliendo(e){

    e.preventDefault();
    //elemDestino.style.background = "#FFFFFF";
    elemDestino.style.visibility = "hidden";
}

window.addEventListener("load", Comenzar, false);