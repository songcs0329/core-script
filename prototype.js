// 프로토타입: 아래 4개는 내부적으로 모두 같다.
[1, 2, 3].constructor
// === [1, 2, 3].[[Prototype]].constructor
=== Array.Prototype.constructor
=== Array
// 생성자함수, Array 프로토타입 > 배열과 관련된 메서드들이 있다.
// null, undefined 제외한 모든 데이터타입은 생성자함수 존재
function Person(n, a) {
	this.name = n
	this.age = a
}
var roy = new Person('roy', 30)
var clone1 = new roy.__proto__.constructor('clone1', 10)
var clone2 = new roy.constructor('clone2', 15)
var clone3 = new Object.getPrototypeOf(roy).constructor('clone3', 20)
var clone4 = new Person.prototype.constructor('clone4', 25)

// 메소드 상속 및 동작원리
function Person(n, a) {
	this.name = n
	this.age = a
}
// 프로토타입을 통해 한번 만들어둔 함수 참조, 메모리용량 최적화 가능, 일반화 = 프로토타입으로 설명
Person.prototype.setOlder = function() {
	this.age += 1
}
Person.prototype.getAge = function() {
	return this.age
}
var roy = new Person('roy', 30)
var jay = new Person('jay', 25)
roy.setOlder() // 각 인스턴스들이 자신의 메서드처럼 실행가능
jay.getAge()

// 프로토타입 체이닝
// 자바스크립트 전체를 통괄하는 공통된 메서들이 있다. 모든 데이터타입이 프로토타입 체이닝을 통해 접근할 수 있다.
// Object.Prototype 객체 전용 프로토타입 메서드를 못만듦 > 객체 생성자함수에 직접 메서드 정의
Object.keys(obj) // 파라미터로 객체 자신을 넘긴다.
// 자신 인스턴스에서 메서드를 호출, 없으면 프로토타입에 메서드 있는지 호출, 없으면 Object.Prototype에서 호출, 마지막으로 없으면 에러
// 가장 먼저 찾은 메서드 실행