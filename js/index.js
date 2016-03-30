$(document).ready(function(){
    $("#button").click(function(){
        $(index_img).attr("src","./images/2.jpg");
    });
    $("#selection").change(function(){
    	alert($(this).val());
    	window.location = $(this).val();
    });
});