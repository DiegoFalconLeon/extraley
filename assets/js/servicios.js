$(document).ready(function () {
	var x = window.location.hash;
	if(x != ""){
		$('html,body').animate({ scrollTop: $(x).offset().top - $("#header header").height() -25 }, 4000,  function() {
            $('html,body').stop();
        });
	}
});
