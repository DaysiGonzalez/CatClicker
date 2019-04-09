let clicks = 0;
var kittyImage = document.getElementById('kitty');
kittyImage.addEventListener('click', function(){
	clicks++;
	document.getElementById("click-count").innerHTML = "Clicks: " + clicks;
}, false);
