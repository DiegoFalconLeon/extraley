$(window).load(function(){

    $( window ).resize(function() {
        change();
    });
    change();

});

function change(){
   
    $(".cuadro-asesor").height("auto");
    var heights = $(".cuadro-asesor").map(function ()
    {
        return $(this).height();
    }).get();
    maxHeight = Math.max.apply(null, heights);
    $(".cuadro-asesor").height(maxHeight);
}