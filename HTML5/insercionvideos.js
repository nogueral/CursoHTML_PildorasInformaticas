var miVideo, reproducir, barra, progreso, maximo;

maximo = 600;

function Comenzar(){

    miVideo=document.getElementById("miAudio");
    reproducir=document.getElementById("reproducir");
    barra=document.getElementById("barra");
    progreso=document.getElementById("progreso");

    reproducir.addEventListener("click", Clickando, false);
    barra.addEventListener("click", Adelantando, false);
}

function Clickando(){
    if((miVideo.paused==false) && (miVideo.ended==false)){

        miVideo.pause();
        reproducir.innerHTML="Play";
        /*alert("La duracion total es: " + miVideo.duration);
        alert("El tiempo actual es: " + miVideo.currentTime);*/

    } else {

        miVideo.play();
        reproducir.innerHTML="Pause";
        bucle = setInterval(Estado, 30); // llama al metodo indicado en el primer parametro, cada x unidad de tiempo que se indica en el 2do parametro

    }
}

function Estado(){

    if(miVideo.ended==false){

        var total = parseInt(miVideo.currentTime*maximo/miVideo.duration);
        progreso.style.width = total + "px";
    }

}

function Adelantando(posicion){

    if(miVideo.paused==false && miVideo.ended==false){

        var ratonX = posicion.pageX-barra.offsetLeft;

        /*la propiedad pageX devuelve la posicion en el eje X, la propiedad offsetLeft
        devuelve la distancia que hay entre el objeto en cuestion y la posicion 0 del eje X */

        var nuevoTiempo = ratonX*miVideo.duration/maximo;

        miVideo.currentTime = nuevoTiempo;
        progreso.style.width = ratonX+"px";
    }
}


window.addEventListener("load", Comenzar, false);

/*OBJETO VIDEO

PROPIEDADES
-duration: duracion del video
-currentTime: tiempo actual del video
-paused: video pausado
-ended: video finalizado

METODOS
-play()
-pause()
*/