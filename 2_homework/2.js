// Создайте функцию конструктор, которая создает объект со свойством 
// экземпляра, свойством функции-конструктора, с методом экземпляра и методом 
// функции-конструктора. Имена выберите произвольно.

function Func() {
	this.greeting = 'hello world';
	this.sayHi = function() {
		document.write(this.greeting + '<br>');
	}
}

var func1 = new Func();

func1.__proto__.farewell = 'bye-bye';
func1.__proto__.sayGoodbye = function() {
	document.write(this.farewell  + '<br>');
}

func1.sayHi();
func1.sayGoodbye();

// Разработать функцию-конструктор, которая будет создавать объект 
// Human (человек). Создайте массив объектов и реализуйте функцию, 
// которая будет сортировать элементы массива по значению свойства Age по 
// возрастанию или по убыванию.

function Person(age) {
	this.age = age;
}

var persons = new Array;

function fillArray(arr,count) {
	for (var i=0; i<count; i++) {
	arr.push(new Person(Math.floor(Math.random()*100)));
	}
	return arr;
}

function sortPersons(arr,sorting) {
	arr.sort(function(a,b) {
    		return a.age - b.age;
		});

	if(sorting == 'decrease') {
		return arr.reverse();
	}
	return arr;
}

var persons10 = fillArray(persons,10);
var sortedPersons = sortPersons(persons10,'decrease');
console.log(sortedPersons);

// Разработайте функцию-конструктор, которая будет создавать объект 
// Human (человек), добавьте на свое усмотрение свойства и методы в этот 
// объект. Подумайте, какие методы и свойства следует сделать уровня 
// экземпляра, а какие уровня функции-конструктора. (методы run(), walk(), 
// свойства height, weight, age)


function Human(name,age,gender) {
	this.name = name;
	this.age = age;
	this.gender = gender;
}

Human.prototype.species = 'homo-sapiens';
Human.prototype.ageMeasure = 'years';
Human.prototype.talk = function(phrase){
	console.log(phrase);
}
Human.prototype.move = function(speed){
	if(speed == 'slow') {
		console.log('I\'m walking...');
	}
	else if(speed == 'fast') {
		console.log('I\'m running!');
	}
	else {
		console.log('I\'m staying at one place');
	}
}
Human.prototype.isAdult = function(){
	if (this.age >= 18) {
		return true;
	}
	return false;
}

var person1 = new Human('Vasya',25,'male');
var person2 = new Human('Mary',20,'female');

person1.personalFeature = function() {
	console.log('I like to play football');
}
person2.personalFeature = function() {
	console.log('I like to travel around the world');
}

person1.talk('Hi everyone!');
person1.move('slow');
console.log(person2.name + ': ' + person2.age + ' ' + person2.ageMeasure);
console.log(person2.name + ' is adult: ' + person2.isAdult());
