function Comenzar(){

    var boton = document.getElementById("dameUbicacion");

    boton.addEventListener("click", Obtener, false);

}

function Obtener(){

    var parametros = {enableHighAccuracy: true, timeout: 10000, maximunAge: 60000};
    navigator.geolocation.getCurrentPosition(MostrarPosicion, GestionErrores, parametros);
    //el metodo watchPosition actualiza la informacion cada determinada cant de tiempo
}

function MostrarPosicion(posicion){

    var ubicacion = document.getElementById("ubicacion");

    //var latitud = "Latitud: " + posicion.coords.latitude;

    /*var miUbicacion = "";

    miUbicacion+="Latitud: " + posicion.coords.latitude + "<br>";
    miUbicacion+="Longitud: " + posicion.coords.longitude + "<br>";
    miUbicacion+="Exactitud: " + posicion.coords.accuracy + "<br>";*/

    var miMapa = "http://maps.google.com/maps/api/staticmap?center=" + 
    posicion.coords.latitude + "," + posicion.coords.longitude + "," + 
    "&zoom=12&size=400x400&sensor=false&markers=" + posicion.coords.latitude + "," +
     posicion.coords.longitude;
    
    //ubicacion.innerHTML = miUbicacion;

    ubicacion.innerHTML = "<img src='" + miMapa + "'>";
}

function GestionErrores(error){

   // alert("Ha ocurrido un error: " + error.code + " " + error.message);

   /* 
   Propiedad code: representado x 3 constantes:
   1 - permiso denegado
   2 - ubicacion no disponible
   3 - tiempo para detectar ubicacion excedido
   */

    if(error.code==1){
        alert("Debes permitir el uso de la geolocalizacion a tu navegador");
    }
}

window.addEventListener("load", Comenzar, false);