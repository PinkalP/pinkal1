$(document).ready(function(){
	$("#btn1").click(function(){
		$("#p1").hide();
	});
	$("#btn2").click(function(){
		$('#p2').hide();
	});
	$("#p3").dblclick(function(){
		$(this).hide();
	});
	$("#p4").mouseenter(function(){
		alert("you are entering in paragraph");
	});
	$("#p5").mouseleave(function(){
		alert("you are leaving in paragraph");
	});
	$("#p6").hover(function(){
		alert("entering in paragraph");
	},
		function(){
			alert("leaving paragraph");
	});
	$("#btn3").click(function(){
		$("#p7").toggle();
	});

});

