// this 바인딩은 실행컨텍스트가 활성화될 떄 한다. > 함수가 호출될 떄 결정된다.
// 동적으로 바인딩된다. 호출방식에 따라 다르다.

// 전역공간에서: 전역객체 window(broswer) / global(node.js)

// 함수 호출시: 전역객체 window(broswer) / global(node.js)
function a() {
	console.log(this)
}
a() // 함수의 호출을 전역공간에서 했기 떄문 > 전역객체
function b() {
	function c() {
		console.log(this)
	}
	c() // 얘도 window가 나온다. > 이게 맞는건가? > arrow function 나옴, ES5 함수호출은 무조건 전역객체
}
b()
var d = {
	e() {
		console.log(this) // 호출한 대상객체(d)
		function f() {
			console.log(this) // 전역객체(window), f()로 함수로서 호출했기 때문, 호출형태만 보면된다.
		}
		f() // 함수호출
	}
}
d.e() // 메서드로서 호출

// 메서드 호출시: 메서드 호출주체(메서드 명 앞)
var a = {
	b() {
		console.log(this)
	}
}
a.b() // b함수를 a의 메서드로서 호출, 인스턴스(객체)와 관련된 동작
// 원래는 함수인데 어떤 객체와 '관련된'동작을 하게 되면 메서드라고 부르겠다.(메서드로서 호출로 본다.)
// 메서드 내부함수 우회법: 스코프체인을 이용, 변수 추가
var a = 10;
var obj = {
	a: 20,
	b() {
		var self = this // 메서드 내부함수 우회법: 스코프체인을 이용, 변수 추가
		console.log(this.a) // 20
		function c() {
			console.log(this.a) // 10
			console.log(self.a) // 20
		}
		c() // 함수로서 호출, 전역객체
	}
}
var obj = {
	a: 20,
	b() {
		var self = this
		console.log(this.a) // 20
		const c = () => { // arrow function, this 바인딩 안함
			console.log(this.a) // 20
		}
		c()
	}
}
obj.b()

// callback 호출시
// call, apply, bind: 명시적으로 this 바인딩하는 법
function a(x, y, z) {
	console.log(this, x, y, z)
}
var b = {
	bb: 'bbb'
}
// {bb: "bbb"} 1 2 3
a.call(b, 1, 2, 3)
a.apply(b, [1, 2, 3])
var c = a.bind(b)
c(1, 2, 3)
var d = a.bind(b, 1, 2)
d(3)
var callback = function() {
	console.log(this) // window
}
var obj = {
	a: 1,
	b(cb) {
		// 콜백함수를 어떻게 호출해줄거냐에 따라서 다르다.(기본적으론 전역객체)
		cb() // this는 호출 시 결정됨 === 함수로서 호출 === 전역객체(window)
		cb.call(this) // obj
	}
}
obj.b(callback)
document.getElementById("test").addEventListener("click", function() { // addEventListener가 this를 target으로 지정해둠
	console.log(this) // html dom이 나온다.
}.bind(obj) // this를 바꾸고 싶을때, obj
)

// 생성자함수 호출시: new 연산자를 썼다, 새로 만들 인스턴스 객체 자체가 this
function Person(n ,a) {
	this.name = n;
	this.age = a;
}
var boy = new Person('song', 29)
console.log(boy) // Person {name: 'song', age: 29}
