$(document).ready(function(){

$('.toggle-btn').on('click',function(){
	
	if($("#sidePane").css('left') == "-200px") {
	$("#sidePane").attr("id","sidePaneActive");
	$(".col-xs-1").attr("class","col-xs-3 justify-content-md-center slow");
	$(".col-xs-10").attr("class","aboutMe col-xs-9");
	}
	else{
	$("#sidePaneActive").attr("id","sidePane");
	$(".col-xs-3").attr("class","col-xs-1");
	$(".col-xs-9").attr("class","aboutMe col-xs-10");

	}
	
});
});
