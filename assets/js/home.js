function change(){$(".cuadro-articulo").height("auto");a=$(".cuadro-articulo").map(function(){return $(this).height()}).get();maxHeight=Math.max.apply(null,a),$(".cuadro-articulo").height(maxHeight),$(".cuadro-areasTrabajo").height("auto");var a=$(".cuadro-areasTrabajo").map(function(){return $(this).height()}).get();maxHeight=Math.max.apply(null,a),$(".cuadro-areasTrabajo").height(maxHeight)}$(document).ready(function(){$(".cuadro-casos").click(function(){id=$(this).data("id"),$.post(window.base_url+"home/getCaso",{id:id},function(a){if(a.status){$("#modalCaso #casotext1").html(a.data.nombre),$("#modalCaso #casotext2").html(a.data.subNombre),$("#modalCaso #casotext3").html(a.data.descripcion),$("#modalCaso #casotext4 span").html(a.data.comentario),$("#modalCaso #casotext5").html(a.data.autor),$("#modalCaso #casotext6").html(a.data.especialidad);var e="";""!=a.data.imagenopcion&&(e='<img src="'+window.base_url+"assets/img/casos/"+a.data.imagenopcion+'" alt="caso de exito">'),$("#modalCaso #casotext7").html(e),$("#modalCaso").modal("show")}else alert("No se pudo cargar los datos delcaso de éxito.")},"json")});var a=$("#sliderFirst").royalSlider({autoHeight:!0,arrowsNav:!1,fadeinLoadedSlide:!1,controlNavigationSpacing:0,controlNavigation:"tabs",imageScaleMode:"none",imageAlignCenter:!1,loop:!0,slidesSpacing:0,loopRewind:!1,numImagesToPreload:6,keyboardNavEnabled:!0,autoHeight:!0,usePreloader:!1,controlNavigation:"bullets",imageScalePadding:0,sliderDrag:!1,autoPlay:{enabled:!0,pauseOnHover:!0,delay:1e4},navigateByClick:!1}).data("royalSlider");$("#flecha1").click(function(){a.prev()}),$("#flecha2").click(function(){a.next()}),a.ev.on("rsBeforeAnimStart",function(a){$("#slider .cont-titulo-slider").removeClass("fadeInRight")}),a.ev.on("rsAfterSlideChange",function(a,e,o){$("#slider .cont-titulo-slider").addClass("fadeInRight")}),a.ev.trigger("rsAfterSlideChange");var e=$("#cont-list-asesores-slider").royalSlider({autoHeight:!0,arrowsNav:!1,fadeinLoadedSlide:!1,controlNavigationSpacing:0,controlNavigation:"tabs",imageScaleMode:"none",imageAlignCenter:!1,slidesSpacing:0,loopRewind:!1,numImagesToPreload:100,keyboardNavEnabled:!1,autoHeight:!0,usePreloader:!1,imageScalePadding:0,sliderDrag:!1,navigateByClick:!1}).data("royalSlider");$(".fd").click(function(){e.prev()}),$(".fi").click(function(){e.next()}),e.ev.on("rsAfterSlideChange",function(a,o,t){var i=$(document).width(),n=3;n=i>1190?3:i>830?2:1,e.numSlides<=n?e.goTo(0):(e.currSlideId>=e.numSlides-n&&e.goTo(e.numSlides-n),e.currSlideId)}),e.ev.trigger("rsAfterSlideChange"),$(window).resize(function(){change()}),change()});