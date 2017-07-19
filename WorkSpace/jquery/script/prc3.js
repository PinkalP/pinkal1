$(document).ready(function(){
	$("#btn1").click(function(){
		alert($("#li").parent());
	})

	$("#btn2").click(function(){
		alert($("h1").eq(2).css("background-color","red"));
	})

});

