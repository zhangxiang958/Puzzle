$(document).ready(function(){
	$(".dropdown").click(function(){
		if($(".dropdown").hasClass("open")){
			$(".dropdown").removeClass("open");
		}
		else {
			$(this).addClass("open");
		}
	});
});