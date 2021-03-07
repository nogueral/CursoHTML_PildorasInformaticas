function Comenzar(){

    var imagenes = document.querySelectorAll("#cajaImagen img");

    for(var i=0; i<imagenes.length; i++){

        imagenes[i].addEventListener("dragstart", ComenzandoArrastrar, false);

        if(i!=1){
        
            imagenes[i].addEventListener("dragend", Terminado, false);
        }
        
    }

    var destino = document.getElementById("destino");

    destino.addEventListener("dragenter", Entrando, false);
    destino.addEventListener("dragleave", Saliendo, false);
    destino.addEventListener("dragover", function(e){e.preventDefault();}, false);
    destino.addEventListener("drop", Soltado, false);
}

function Entrando(e){

    e.preventDefault();

    var id = e.dataTransfer.getData("Text");

    if(id!="imagen2"){

        destino.style.background = "rgba(8,252,25,.8)";

    } else {

        destino.style.background = "#FA0D29";
    }

    
}

function Saliendo(e){

    e.preventDefault();

    destino.style.background = "#FFFFFF";
}

function ComenzandoArrastrar(e){

    var elemento = e.target;

    e.dataTransfer.setData("Text", elemento.getAttribute("id"));
}

function Soltado(e){

    e.preventDefault();

    var id = e.dataTransfer.getData("Text");

    if(id!="imagen2"){
    
        var src = document.getElementById(id).src;

        destino.innerHTML = "<img src='" + src + "'>";

    } else {

        destino.innerHTML = "La imagen no es admitida"; 
        destino.style.background = "#FA0D29";       
    }


}

function Terminado(e){

    var elemento = e.target;

    elemento.style.visibility = "hidden";
}


window.addEventListener("load", Comenzar, false);