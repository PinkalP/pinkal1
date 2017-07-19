$(document).ready(function(){
	$("#btn1").click(function(){
		alert($("#p1").text());
	})

	$("#btn2").click(function(){
		alert($("#p2").html());
	})

	$("#btn3").click(function(){
		alert($("#t1").val());
	})

	$("#btn4").click(function(){
		alert($("#link1").attr("href"));
	})

	$("#btn5").click(function(){
		$("#p3").text("ha ha ha ha ha ha");
	})

	$("#btn6").click(function(){
		$("#t2").val("heeeelllloooo");
	})

	$("#btn7").click(function(){
		$("#p4").append("pinkal");
	})

	$("#btn8").click(function(){
		$("#p5").prepend("INDIA");
	})

	$("#btn9").click(function(){
		$("#dom").empty();
	})

	$("#btn10").click(function(){
		$("#dom").remove();
	})

	$("#btn11").click(function(){
		$("#h1").addClass("c2");
	})

	$("#btn12").click(function(){
		$("#h2").toggleClass("c2");
	})

});

