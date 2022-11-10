$(document).ready(function () {
	$("#form-contacto").submit(function(e){
		e.preventDefault();
		if($("#nombre").val()=="" || $("#correo").val()=="" || $("#asunto").val()=="" || $("#mensaje").val()==""){
			alert("¡Por favor completar todos los campos!");
		}else{
			$.post( window.base_url+"contacto/saveContacto", $("#form-contacto").serialize() , function( data ) {
			  	if(data.status){
			  		alert("Se acaba de enviar su mensaje. En breve nos contactaremos con usted.");
			  		$("#form-contacto").trigger("reset");
			  	}else{
			  		alert("No se enviar su mensaje. Favor de intentarlo nuevamente.");
			  	}
			}, "json");
		}
	});	
});
function initMap(){
	var map;
	map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -12.07319, lng: -76.942},
        zoom: 15
	});
	var marker = new google.maps.Marker({
	    position: {lat: -12.07319, lng: -76.942},
	    title:"Hello World!"
	});
	marker.setMap(map);
}