var n=1;
var comprobarModal = true;
var totalPreguntas;
var arrayOrden = Array();
var xa1 = false;
var xa2 = true;
var xa3 = false;
$(document).ready(function () {

	$("#form-dl").submit(function(e){
		$("#cargar").show();
		e.preventDefault();
		if($("#correo").val()=="" || $("#nombres").val()=="" || $("#telefono").val()==""){
			alert("Complete todos los campos");
		}else{
			$.post( window.base_url+"diagnostico_legal/sendFirst", $("#form-dl").serialize() , function( data ) {
			  	if(data.status){
			  		$("#modalInicio").modal('hide');
			  		xa3 = true;
			  	}else{
			  		alert(data.msg);
			  	}
			  	$("#cargar").hide();
			}, "json");
		}

	});

	$("#form-dl-fin").submit(function(e){
		e.preventDefault();
		$("#cargar").show();
		$.post( window.base_url+"diagnostico_legal/sendLast", $("#form-dl-fin").serialize()+"&nombres="+$("#nombres").val() , function( data ) {
		  	if(data.status){
		  		alert('La recomendación se realizo con éxito.');
		  	}else{
		  		alert(data.msg);
		  	}
		  	$("#cargar").hide();
		}, "json");
	});

	//init
	totalPreguntas=$("#totalPreguntas").val();
	$(".contq1").show();
	arrayOrden[n]=1;

	//act barra
	actualizar_barra();

	//eventos
	$("#anterior").click(function(){
		if(n>1){
			n=n-1;
			$(".cont-question").hide();
			$(".contq"+arrayOrden[n]).show();
			actualizar_barra();
			if(n==1){
				$("#anterior").hide();
			}
		}
		$("#posterior").show();
		analisisRespuestas();
	});
	$("#posterior").click(function(){
		if(n<totalPreguntas){
			if($(".contq"+n+"").hasClass("cont-respuesta-seccion")){
				n=n+1;
				arrayOrden[n]=n;
				$(".cont-question").hide();
				$(".contq"+n).show();

				actualizar_barra();
				$("#anterior").show();	

				if($(".contq"+n).hasClass("cont-respuesta-seccion")){

					if(xa2){
						hny = n;
						xa1 = setInterval(function(){ 
							if(xa3){
								envEmailSeccion(hny);
								clearInterval(xa1);
								xa3 = false;
							}
						 }, 3000);
						xa2 = false;
					}else{
						envEmailSeccion(n);
					}
					
					if(comprobarModal){
						comprobarModal = false;
						$("#modalInicio").modal("show");
					}
				}

			}else{
				if( $(".contq"+n+" input:radio").is(':checked')) {  
					n=n+1;
					arrayOrden[n]=n;
					$(".cont-question").hide();
					$(".contq"+n).show();

					actualizar_barra();
					$("#anterior").show();	

					if($(".contq"+n).hasClass("cont-respuesta-seccion")){

						if(xa2){

							hny = n;
							xa1 = setInterval(function(){ 
								if(xa3){
									envEmailSeccion(hny);
									clearInterval(xa1);
									xa3 = false;
								}
							 }, 3000);
							xa2 = false;
						}else{
							envEmailSeccion(n);
						}
						
						if(comprobarModal){
							comprobarModal = false;
							$("#modalInicio").modal("show");
						}
					}

				} else {  
					alert("Selecciona una opción!!!");  
				} 
			}
			 
		}
		if(n==totalPreguntas){
			$("#posterior").hide();
			setTimeout(function(){
				$("#modalFin").modal('show');
			},3000);
			
		}
		analisisRespuestas();
	});
});

function actualizar_barra(){
	var p = parseInt(100*n/totalPreguntas);
	$("#progreso_barra").css("width",p+"%");
	$(".sr-only").html(p+"%");
}

function analisisRespuestas(){
	$(".resp-list").each(function () { 
	  	auxid = $(this).data("id");
	  	if ($(".cond-resp-"+auxid).length ) {
	  		var xaux = true;
		  	$(".cond-resp-"+auxid).each(function () { 
		  		var alternati = $(this).val();
		  		if(!$('#s-option'+alternati).is(':checked')) { 
		  			xaux = false;
		  		}
		  	});
		  	if (xaux) {
		  		$(".resp-list-"+auxid).show();
		  	}else{
		  		$(".resp-list-"+auxid).hide();
		  	}
		}else{
			//se muestra
			$(".resp-list-"+auxid).show();
		}
	});


	$(".salt").each(function () { 
		var alter = $(this).data("id");
		if($('#s-option'+alter).is(':checked')) { 
  			$(".salt"+alter).show();
  		}
  		else{
  			$(".salt"+alter).hide();
  		}
	});
}

function envEmailSeccion(n){
	setTimeout(function(){
		var x = '';
		for (var i =1; i <= n; i++) {
			if($(".contq"+i).hasClass("cont-respuesta-seccion")){
				x = x + document.getElementsByClassName("contq"+i)[0].outerHTML;
			}
		};
		$.post( window.base_url+"diagnostico_legal/sendSection", {data:x,correo:$("#correo").val(),telefono:$("#telefono").val(),nombres:$("#nombres").val()} , function( data ) {

		}, "json");
	},1500);
}