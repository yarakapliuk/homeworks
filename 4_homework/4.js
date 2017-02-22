window.onload = function() {
	var inputsBlock = document.querySelector('.inputs-block'),
	    range = document.querySelector('#range'),
	    rangeResult = document.querySelector('#rangeResult'),
	    checker = document.querySelector('#checker'),
	    totalStatus = document.querySelector('.totalStatus'),
	    topPercents = document.querySelector('.topPercents'),
	    totalResult = document.querySelector('#totalResult');

	range.oninput = function() {
		rangeResult.value = this.value;
		calc(this.value);
	}

	rangeResult.oninput = function() {
		range.value = this.value;
		calc(this.value);
	}

	checker.onclick = function() {
		percentsOnly();
	}

	function calc(x) {
		totalStatus.style.height = 2*range.value + 'px';

		var percents;

		if (x < 20) {
			percents = 2;
		}
		else if (x >= 20 && x < 50) {
			percents = 4;
		}
		else if (x >= 50 && x < 75) {
			percents = 6;
		}
		else {
			percents = 8;
		}

		totalResult.innerHTML = '+' + percents + '%: ' + (+x + x*percents/100).toFixed(2);
		topPercents.style.bottom = 2*range.value + 'px';
		topPercents.style.height = 2*percents + 'px';
	}

	function percentsOnly() {
		if (checker.hasAttribute('checked')) {
			checker.removeAttribute('checked','checked');
			range.removeAttribute('disabled','disabled');
			var percentRange = document.getElementById('percentRange')
			inputsBlock.removeChild(percentRange);
		}
		else {
			var newInput = document.createElement('input');
			newInput.setAttribute('type','range');
			newInput.setAttribute('min','2');
			newInput.setAttribute('max','15');
			newInput.setAttribute('value','0');
			newInput.setAttribute('id','percentRange');
			checker.setAttribute('checked','checked');
			range.setAttribute('disabled','disabled');
			inputsBlock.appendChild(newInput);
			var percentRange = document.getElementById('percentRange');

			percentRange.oninput = function(){
				var total = this.value;
				topPercents.style.height = 2*total + 'px';
				totalResult.innerHTML = '+' + total + '%: ' + (+range.value + range.value*total/100).toFixed(2);
			}
		}
	}
}
