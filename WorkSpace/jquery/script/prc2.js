$(document).ready(function(){
	$("#btn1").click(function(){
		$("#d1").fadeIn(6000);
	})
});
$(document).ready(function(){
	$("#btn2").click(function(){
		$("#d2").fadeToggle(6000);
	})
});

$(document).ready(function(){
	$("#btn3").click(function(){
		$("#d3").animate({left:'200px'});
	})
});

$(document).ready(function(){
	$("#btn4").click(function(){
		$("#p1").hide("slow",function(){
			alert("Paraghraph Is Hide");
		});
	})
});