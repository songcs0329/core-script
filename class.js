// class: 인스턴스들의 공통 속성을 모은 추상적 개념
// instance: 해당 클래스의 속성을 지닌 구체적인 객체
// 과일: class / 사과, 배: instance
function Person(name, age) {
	this._name = name
	this._age = age
}

// static method: 클래스 자체에서만 접근가능
Person.getInfo = function(instance) {
	return {
		name: instance._name,
		age: instance._age
	}
}

// prototype method
Person.prototype.getName = function() {
	return this._name
}
Person.prototype.getAge = function() {
	return this._age
}

var roy = new Person('roy', 30)
console.log(roy.getName()) // roy
console.log(roy.getAge()) // 30
console.log(roy.getInfo(roy)) // error
// 인스턴스가 아닌 생성자함수에서 접근해야함
console.log(Person.getInfo(roy))

// 클래스 상속
function Person(n, a) {
	this.name = n
	this.age = a
}
Person.prototype.getName = function() {
	return this.name
}
Person.prototype.getAge = function() {
	return this.age
}
function Employee(n, a, p) {
	this.superClass(n, a)
	this.position = p
}
// subclass의 프로토타입을 superclass의 인스턴스로 바꿔치기
// Employee.prototype = new Person()

// function Bridge() {} // 비어있는 생성자 함수, 불필요한 프로퍼티 제거
// Bridge.prototype = Person.prototype
// Employee.prototype = new Bridge()

// 생성자함수를 subclass로 다시 재설정
// Employee.prototype.constructor = Employee

// Bridge 함수 클로저로 재활용
var extendClass = (function() {
	function Bridge() {}
	return function(Parent, Child) {
		Bridge.prototype = Parent.prototype
		Child.prototype = new Bridge()
		Child.prototype.constructor = Child
		Child.prototype.superClass = Parent
	}
})()
extendClass(Person, Employee)

// 바꿔치기 전에 하면 사라짐
Employee.prototype.getPosition = function() {
	return this.position
}
var roy = new Employee('roy', 30, 'none')
console.log(roy)

// 최종정리
var extendClass = (function() {
	function Bridge() {}
	return function(Parent, Child) {
		Bridge.prototype = Parent.prototype
		Child.prototype = new Bridge()
		Child.prototype.constructor = Child
		Child.prototype.superClass = Parent
	}
})()
function Person(n, a) {
	this.name = n
	this.age = a
}
Person.prototype.getName = function() {
	return this.name
}
Person.prototype.getAge = function() {
	return this.age
}
function Employee(n, a, p) {
	this.superClass(n, a)
	this.position = p
}
extendClass(Person, Employee)
Employee.prototype.getPosition = function() {
	return this.position
}
var jay = new Employee('jay', 30, 'job')
console.log(jay)