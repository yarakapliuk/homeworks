window.onload = function() {
	var slider = document.querySelector('#slider'),
		slideContainer = document.querySelector('#slider .slide-container'),
		slides = document.querySelectorAll('#slider .slide'),
		controlNext = document.querySelector('.controls .controls-next'),
		controlPrev = document.querySelector('.controls .controls-prev'),
		currentMargin = 0;

	slideContainer.style.width = slideContainer.clientWidth * slides.length + "px";

	function moveSlides(percents) { // 0.5 = 50%, 1 = 100% и т.д.

		controlNext.onclick = function(){
			if (currentMargin > -((slides.length-1)*slider.clientWidth)) {
				currentMargin -= slider.clientWidth * percents;
				slideContainer.style.marginLeft = currentMargin + 'px';
				controlPrev.classList.remove('inactive');
			}
			else {
				this.classList.add('inactive');
			}
		}

		controlPrev.onclick = function(){
			if (currentMargin < 0) {
			currentMargin += slider.clientWidth * percents;
			slideContainer.style.marginLeft = currentMargin + 'px';
			controlNext.classList.remove('inactive');
			}
			else {
				this.classList.add('inactive');
			}
		}
	}

	moveSlides(0.5);
}