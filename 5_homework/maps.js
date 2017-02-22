/*
2) При нажатии на кнопку определить свое местоположение А.
Делаем два поля ввода (X и Y) - это координаты точки B.
Ставим маркер на середине пути. Путь - это визуальная прямая между 
точками А и Б.
*/

window.onload = function() {

	var position = new google.maps.LatLng(50.4403198, 30.5125835); // центр Киева
	
	var options = {
			zoom: 9,
			center: position,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		};
	
	var map = new google.maps.Map(document.querySelector('#map'),options);
	
	navigator.geolocation.getCurrentPosition(updatePosition);

	function createMarker(obj) {
    	var marker = new google.maps.Marker({
			position: {lat: obj.lat, lng: obj.lng},
			map: map,
			animation: google.maps.Animation.DROP,
			title: obj.name
		});
    }

	function updatePosition(pos) {
		// координаты точки А
		var a = {};
		a.lat = pos.coords.latitude;
		a.lng = pos.coords.longitude;
		a.name = 'Моё текущее местоположение';
		// координаты точки В
		var b = {};
		b.name = 'Точка В';
		// маркер точки А
		createMarker(a);

		document.querySelector('#find-b').onclick = function() {
			// определяем координаты B
			b.lat = +document.querySelector('#y-coord').value;
			b.lng = +document.querySelector('#x-coord').value;
			// маркер для В
			createMarker(b);
		}

		document.querySelector('#find-center').onclick = function() {
			var x = {};
			x.lat = b.lat;
			x.lng = b.lng;
			// вычисляем половину расстояния
			x.lat += (a.lat - b.lat)/2;
			x.lng += (a.lng - b.lng)/2;
			x.name = 'Середина пути';
			// маркер новой точки
			createMarker(x);
		}

/*
3) В дополнение к задаче №2.
Определить наличие точки С в прямоугольнике, который строим на основе двух точек А и Б. 
где А - точка левой верхней или нижней вершины, точка Б - точка правой 
верхней или нижней вершины.

Если точка Б находится слева от точки А - тогда нужно воспринимать 
прямоугольник, который “обходит” всю Землю)

ТОчку С получаем КАК УГОДНО, вплоть до того, что вбиваем ручками. Т
ак будет легче отдебажить.
*/
		document.querySelector('#check-c').onclick = function () {
			var c = {
				lat: +document.querySelector('#y-coord-c').value,
				lng: +document.querySelector('#x-coord-c').value,
				name: 'Точка C'
			};

			createMarker(c);

			function checkThirdPoint(c) {

				var bLat = +document.querySelector('#y-coord').value,
					bLng = +document.querySelector('#x-coord').value,
					check;

				if ( c.lat > a.lat && c.lat < bLat // проверяем чтобы широта (ось y) т. С лежала между широтой А и В
				  || c.lat < a.lat && c.lat > bLat) { 
					if ( c.lng > a.lng && c.lng < bLng ) { // если т. С слева от А и её долгота (ось x) между долготами А и В
						check = true;
					}
					else if ( bLng < a.lng && c.lng < bLng // если т. С справа от А и её долгота не между долготами А и В,
						   || bLng < a.lng && c.lng > a.lng ) { // но на прямоугольнике огибающем землю
						check = true;
					}
					else {
						check = false
					}
				}
				else {
					check = false
				}
				alert(check);
			}
			checkThirdPoint(c);
		}
	}	    
}
