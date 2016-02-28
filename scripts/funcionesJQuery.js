$(document).ready(function(event){

    
    $(window).load(function(){
        $("#espera").fadeOut(2000);
        $("#boton").fadeIn(2000);
    });

    $("#inicio #boton").click(function(event){
        $("#inicio").fadeOut(1000);
        $("#todo").fadeIn(1000);
    });



    $("li.inicio").click(function(event){
    	$("div.presentaciones").hide(0,function(event){
            $("div.inicio").fadeIn();
        });
    	$("div.videos").hide(0, function(event){
            $("div.inicio").fadeIn();
        });
    	$("div.canciones").hide(0, function(event){
            $("div.inicio").fadeIn();
        });
    	$("div.manuales").hide(0, function(event){
            $("div.inicio").fadeIn();
        });

    	$("li").css("border","none");
    	$("li.inicio").css({"border-left":"solid", "border-color":"#ed6ea7"});
    });

    $("li.presentaciones").click(function(event){
    	$("div.inicio").hide(0,function(event){
            $("div.presentaciones").fadeIn();
        });
        $("div.videos").hide(0, function(event){
            $("div.presentaciones").fadeIn();
        });
        $("div.canciones").hide(0, function(event){
            $("div.presentaciones").fadeIn();
        });
        $("div.manuales").hide(0, function(event){
            $("div.presentaciones").fadeIn();
        });
        $("#imagendefondo").hide(0,function(event){
            $("div.presentaciones").fadeIn();
        });

    	$("li").css("border","none");
    	$("li.presentaciones").css({"border-left":"solid", "border-color":"#ed6ea7"});
    });

    $("li.videos").click(function(){
    	$("div.presentaciones").hide(0,function(event){
            $("div.videos").fadeIn();
        });
        $("div.inicio").hide(0, function(event){
            $("div.videos").fadeIn();
        });
        $("div.canciones").hide(0, function(event){
            $("div.videos").fadeIn();
        });
        $("div.manuales").hide(0, function(event){
            $("div.videos").fadeIn();
        });
        $("#imagendefondo").hide(0,function(event){
            $("div.videos").fadeIn();
        });

    	$("li").css("border","none");
    	$("li.videos").css({"border-left":"solid", "border-color":"#ed6ea7"});
    });

    $("li.canciones").click(function(){
    	$("div.presentaciones").hide(0,function(event){
            $("div.canciones").fadeIn();
        });
        $("div.videos").hide(0, function(event){
            $("div.canciones").fadeIn();
        });
        $("div.inicio").hide(0, function(event){
            $("div.canciones").fadeIn();
        });
        $("div.manuales").hide(0, function(event){
            $("div.canciones").fadeIn();
        });
        $("#imagendefondo").hide(0,function(event){
            $("div.canciones").fadeIn();
        });

    	$("li").css("border","none");
    	$("li.canciones").css({"border-left":"solid", "border-color":"#ed6ea7"});
    });

    $("#mandalatexto").click(function(){
    	$("div.presentaciones").hide(0,function(event){
            $("div.manuales").fadeIn();
        });
        $("div.videos").hide(0, function(event){
            $("div.manuales").fadeIn();
        });
        $("div.canciones").hide(0, function(event){
            $("div.manuales").fadeIn();
        });
        $("div.inicio").hide(0, function(event){
            $("div.manuales").fadeIn();
        });
        $("#imagendefondo").hide(0,function(event){
            $("div.manuales").fadeIn();
        });

    	$("li").css("border","none");
    	$("#mandalatexto").css({"border-left":"solid", "border-color":"#ed6ea7"});
    });

    $("#lienzomandala").click(function(){
    	$("div.presentaciones").hide(0,function(event){
            $("div.manuales").fadeIn();
        });
        $("div.videos").hide(0, function(event){
            $("div.manuales").fadeIn();
        });
        $("div.canciones").hide(0, function(event){
            $("div.manuales").fadeIn();
        });
        $("div.inicio").hide(0, function(event){
            $("div.manuales").fadeIn();
        });
        $("#imagendefondo").hide(0,function(event){
            $("div.manuales").fadeIn();
        });

    	$("li").css("border","none");
    	$("#lienzomandala").css({"border":"solid", "border-color":"#ed6ea7"});
    });



});