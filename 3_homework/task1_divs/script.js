window.onload = function() {

	var blocks = document.querySelectorAll('.myBlock'),
		randomTop = 0,
		randomLeft = 0;

	setInterval(function(){
		for(var i=0; i<blocks.length; i++) {
			randomTop = Math.floor(Math.random()*(window.innerHeight - blocks[i].clientHeight) + 1);
			randomLeft = Math.floor(Math.random()*(window.innerWidth - blocks[i].clientWidth) + 1);
			blocks[i].style.top = randomTop + 'px';
			blocks[i].style.left = randomLeft + 'px';
		}
	}, 1000);
}