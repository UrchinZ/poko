
function rand_num(max){
	var x = Math.floor((Math.random()*max) + 1);
	return x;
}

$(document).ready(function(){
    //randomly select picture
    $("#button").click(function(){
    	var imgnum = rand_num(10);
        $("#index_img").attr("src","./images/"+imgnum+".jpg");	
    });
    $("#selection").change(function(){
    	window.location = $(this).val();
    });
});