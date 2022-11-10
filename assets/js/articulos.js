$(window).load(function(){
	$( window ).resize(function() {
	  	change();
	});
	change();
});
function change(){
	$(".cuadro-articulo").height("auto");

	var heights = $(".cuadro-articulo").map(function ()
    {
        return $(this).height();
    }).get();
    maxHeight = Math.max.apply(null, heights);
    $(".cuadro-articulo").height(maxHeight);
}