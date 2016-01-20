window.onload = function() {
	var move = function(boj, target) {
		var timer;
		clearInterval(timer);
		timer = setInterval(function() {
			var speed = (target - obj.offsetTop) / 3;
			if(Math.abs(obj.offsetTop - target) < 4){
				clearInterval(timer);
				obj.style.marginTop = target + "px";
			}else {
				obj.style.marginTop = obj.offsetTop + speed + "px";
			}
		},30);
	}
}