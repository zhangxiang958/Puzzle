var cw = document.body.clientWidth;

$(document).ready(function(){
	$(".nav li a").each(function() {
		if($(this).next().length > 0) {
			$(this).addClass("parent");
		}
	});

	$(".toggle-menu").click(function(e){
		e.preventDefault();
		$(this).toggleClass("active");
		$(".nav").toggle();
	});
	adjustMenu();
});

$(window).bind("resize orientationchange",function() {
	cw = document.body.clientWidth;
	adjustMenu();
	
})

var adjustMenu = function() {
	if(cw < 768) {
		$(".toggle-menu").css("display","inline-block");
		if(!$(".toggle-menu").hasClass("active")) {
			$(".nav").hide();
		} else {
			$(".nav").show();
		}
		$(".nav li").unbind("mouseenter mouseleave");
		$(".nav li a.parent").unbind("click").bind("click",function(e){
			e.preventDefault();
			$(this).parent("li").toggleClass("hover");
		});
	}
	else if(cw >= 768){
		$(".toggle-menu").css("display","none");
		$(".nav").show();
		$(".nav li").removeClass("hover");
		$("nav li a").unbind("click");
		$(".nav li").unbind("mouseenter mouseenter").bind("mouseenter mouseleave",function(){
			$(this).toggleClass("hover");
		});
	}
}
