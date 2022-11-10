$(document).ready(function () {
	$("#form-login").submit(function(event){
		event.preventDefault();
		$.post( window.base_url+"login/logear", $("#form-login").serialize() , function( data ) {
		  	if(data.status){
		  		location.href = window.base_url+'home';
		  	}else{
		  		$.iGrowl({
				    message: data.msg,
				    small: true,
				    type: 'error'
				});
		  	}
		}, "json");
	});
	$(".solo-numero").keypress(function(e){
		var key =  e.keyCode ? e.keyCode : e.which;
		return ((key >= 48 && key <= 57) || key==13 || key==8);
	});
});