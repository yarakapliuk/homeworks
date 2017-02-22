/*
Реализовать скрипт который во время запущенного видео (любого) 
при нажатии на клавиши “стрелки” произведет следующее:
При клике на правую стрелку - сдвиг видео currentTime на 5сек
При клике на левую стрелку - сдвиг видео currentTime на 2 сек назад
При клике на стрелку вверх - сдвиг видео currentTime на 30 сек
При клике на стрелку вниз - сдвиг видео currentTime на 30 сек

при задерживании пробела - вылазит рекламный блок-видео)
*/

window.onload = function() {
	var video = document.querySelector('#video'),
		adBlock = document.querySelector('#adBlock');

	document.onkeyup = function() {
		manageVideo(video);
	}
	document.onkeypress = function() {
		showAD(video);
	}

	function manageVideo(video) {
		if(event.which == 39 && !video.paused) {
			video.currentTime += 5;
		}
		else if(event.which == 37 && !video.paused) {
			video.currentTime -= 2;
		}
		else if(event.which == 38 && !video.paused) {
			video.currentTime += 30;
		}
		else if(event.which == 40 && !video.paused) {
			video.currentTime -= 30;
		}
		else if(event.which == 32) {
			video.play();
			adBlock.classList.remove('shown');
			adBlock.classList.add('hidden');
		}
	}
	
	function showAD(video) {
		if(event.which == 32 && !video.paused) {
			video.pause();
			adBlock.classList.remove('hidden');
			adBlock.classList.add('shown');
		}
	}
}

/*
Примечание: код работает в Chrome, но не работает в Mozilla FF.
видимо, нужно переназначать стандартные события клавиш для FF.
*/