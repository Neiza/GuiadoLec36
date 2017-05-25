function initMap() {
  var laboratorialima = {lat: -12.1191427, lng: -77.0340046};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 18,
    center: laboratorialima
  });
  var marker = new google.maps.Marker({
    position: laboratorialima,
    map: map
  });


var funcionError = function(error){
  alert("tenemos un problema pr encontra la ubicación");
}
var  latitud ,longitud;
var funcionExito = function(posicion){
  latitud= posicion.coords.latitude;
  longitud = posicion.coords.longitude;

    map.setZoom(20);
    map.setCenter({lat: latitud, lng: longitud});
  var miUbicacion =  new google.maps.Marker({
    position: {lat: latitud, lng: longitud},
    map: map
  });
}

function buscar(){
  if (navigator.geolocation){
    navigator.geolocation.getCurrentPosition(funcionExito, funcionError);
  }
}

document.getElementById("encuentrame").addEventListener("click", buscar);
}
